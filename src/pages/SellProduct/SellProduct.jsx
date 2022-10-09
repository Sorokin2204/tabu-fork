import axios from 'axios';
import Button from 'components/Atoms/Button';
import Loading from 'components/Loading/Loading';
import MessageModal from 'components/Molecules/ProductPage/ThanksModal/ThanksModal';
import ThankModal from 'components/Molecules/ProductPage/ThanksModal/ThanksModal';
import NotFound from 'components/NotFound/NotFound';
import { API_URL } from 'config';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { addProduct, editProduct, getEditProduct, getOldImageIds, uploadDetails, uploadImages, uploadVariations } from 'redux/actions/product';
import { auth } from 'redux/actions/user';
import { setShowMobileCartModal, setShowPhotoRecomendModal, setShowSellerThanksModal } from 'redux/reducers/appReducer';
import { resetAddProducts, resetSellProductPage, uploadDetailsSuccess, uploadVariationsSuccess } from 'redux/reducers/productReducer';
import { sizes } from 'sizes';
import ContentBlock from './ContentBlock/ContentBlock';
import PhotoBlock, { imageTypes } from './PhotoBlock/PhotoBlock';
import * as S from './Styled';
// import { useHistory } from 'react-router';

const SellProduct = () => {
  const defaultValuess = {
    title: '',
    invoice: '',
    description: '',
    seller: null,
    category: {
      id: 100,
      slug: 'beisbolky_kepki',
      title: 'Бейсболки и кепки',
      description: '',
      parent: 89,
      children: [],
      order: null,
    },
    active: true,
    price: '₸ 12 345',
    old_price: '₸ 10 000',
    size: [
      {
        id: 5,
        title: '36',
        size_type: 0,
        size_value: '36',
      },
      {
        id: 6,
        title: '36.5',
        size_type: 0,
        size_value: '36.5',
      },
      {
        id: 7,
        title: '37',
        size_type: 0,
        size_value: '37',
      },
      {
        id: 8,
        title: '37.5',
        size_type: 0,
        size_value: '37.5',
      },
    ],
    color: {
      id: 1,
      title: 'Синий',
      color_code: '#07A4EF',
    },
    brand: {
      id: 1,
      title: 'Adidas',
    },
    material: {
      id: 1,
      title: 'Кашемир',
    },
    condition: 0,
    images: [],
    serial_number: 'SER01',
    sample: 'Expert 32',
    vintage: false,
    duster: true,
    box: true,
    phone_number: '+7 (777) 777-77-77',
    region: 'Беларусь',
    city: 'Минск',
    street: 'ул.Ленина',
    number_of_house: '11',
    number_of_flat: '22',
    details_list: ['1 деталь', '2 деталь', '3 деталь'],
    sizeType: {
      id: 0,
      title: 'Все размеры',
    },
    comment: '',
  };
  const defaultValues = {
    title: '',
    invoice: '',
    description: '',
    seller: null,
    category: null,
    active: true,
    price: null,
    old_price: null,
    size: null,
    color: null,
    brand: null,
    material: null,
    condition: 0,
    images: [],
    serial_number: '',
    sample: '',
    vintage: false,
    duster: false,
    box: false,
    phone_number: '',
    region: '',
    city: '',
    street: '',
    number_of_house: '',
    number_of_flat: '',
    details_list: [''],
    sizeType: { id: -1, title: 'Все размеры' },
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
    getValues,
    reset,
    clearErrors,
    trigger,
    control,
    setError,
  } = useForm({
    defaultValues: defaultValues,
  });

  const { uploadDetailsLoading, uploadImagesLoading, uploadDetailsData, uploadImagesData, uploadVariationsData, uploadVariationsLoading, addProductLoading, addProductData, getEditProductData, getEditProductLoading, getEditProductError, editProductLoading, editProductData } = useSelector(
    (state) => state.product,
  );
  const { categories } = useSelector((state) => state.categories);
  const isMobile = useSelector((state) => state.app.isMobile);
  const { showSellerThanksModal, showPhotoRecomendModal } = useSelector((state) => state.app);
  const { currentUser } = useSelector((state) => state.user);
  const { product_id } = useParams();
  useEffect(() => {
    if (product_id) {
      if (categories.length !== 0) {
        dispath(getEditProduct(product_id));
      }
    } else {
      setInvoice();
      // window.location.reload();
      // reset();
      // dispath(resetSellProductPage());
      // Object.keys(defaultValues).map((key) => {
      //   setValue(key, defaultValues[key]);
      // });
    }
  }, [product_id, categories]);
  const setInvoice = async () => {
    const responseInvoice = await axios.get(`${API_URL}/users/invoice/`, {
      headers: { Authorization: `Token ${localStorage.getItem('token')}` },
    });
    if (responseInvoice?.data?.invoice) {
      setValue('invoice', responseInvoice?.data?.invoice);
    }
  };
  const dispath = useDispatch();
  const validateImage = (images, type, nameError, messageError) => {
    const frontImage = images.findIndex((img) => img?.type === type);
    if (frontImage === -1) {
      if (imageTypes[type] !== undefined) {
        setError(`images[${imageTypes[type]}]`, { type: nameError, message: messageError });
        return false;
      } else {
        clearErrors(`images[${imageTypes[type]}]`, { exact: false });
      }
    }
    return true;
  };

  const validateImages = (images, condition) => {
    let validFront = true;
    let validBehind = true;
    let validTags = true;
    validFront = validateImage(images, 'FRONT', 'emptyFrontImg', 'Загрузите фото спереди');
    validBehind = validateImage(images, 'BEHIND', 'emptyBehindImg', 'Загрузите фото сзади');
    if (condition === 0) {
      validTags = validateImage(images, 'TAGS', 'emptyTagsImg', 'Загрузите фото фирменой бирки');
    }
    return validFront && validBehind && validTags;
  };
  const imagesWatch = watch('images');
  useEffect(() => {
    return () => {
      dispath(resetSellProductPage());
    };
  }, []);

  useEffect(() => {
    if (uploadDetailsData && uploadImagesData && uploadVariationsData) {
      const newData = { ...getValues() };
      let images = [];
      let oldImages = getOldImageIds(newData.images);
      images = [...oldImages, ...uploadImagesData];

      delete newData.sizeType;

      newData.title = `${newData.brand.title} ${newData.sample}`;
      newData.category = newData.category.id;
      newData.brand = newData.brand.id;
      newData.color = newData.color.id;
      newData.material = newData.material.id;
      newData.details_list = uploadDetailsData;
      newData.condition_images = images;
      newData.images = images;
      newData.sample = newData?.sample ?? `  `;
      newData.serial_number = newData?.serial_number ?? `  `;
      newData.number_of_flat = parseInt(newData.number_of_flat);
      newData.invoice = newData.invoice;
      newData.number_of_house = newData.number_of_house.toString();
      newData.price = newData?.price?.toString()?.replace(/[^0-9]+/g, '');
      newData.old_price = newData?.old_price ? newData?.old_price?.replace(/[^0-9]+/g, '') : null;
      newData.old_price = newData?.old_price === '0' ? null : newData?.old_price;

      newData.phone_number = newData.phone_number.replace(/[^0-9\+]+/g, '');
      newData.seller = currentUser.id;
      if (getEditProductData) {
        console.log([...uploadVariationsData, ...getEditProductData?.size_variations.map((sizeVar) => sizeVar.id)]);
        newData.productvariations_set = [...uploadVariationsData, ...getEditProductData?.size_variations.map((sizeVar) => sizeVar.id)];
      } else {
        newData.productvariations_set = uploadVariationsData;
      }

      if (getEditProductData) {
        dispath(editProduct(newData));
      } else {
        dispath(addProduct(newData));
      }
    }
  }, [uploadDetailsData, uploadImagesData, uploadVariationsData]);
  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (name?.includes('images') || name === 'condition') {
        clearErrors('images[2]');
        const validImages = validateImages(value.images, value.condition);
        if (validImages) {
          clearErrors('images');
        }
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);
  useEffect(() => {
    if (getEditProductData) {
      Object.keys(getEditProductData).map((key) => {
        if (key !== 'size_variations') {
          setValue(key, getEditProductData[key]);
        }
      });
    }
  }, [getEditProductData]);
  const navigate = useNavigate();
  useEffect(() => {
    if (addProductData || editProductData) {
      dispath(setShowSellerThanksModal(true));
    }
  }, [addProductData, editProductData]);

  const onSubmit = (data) => {
    const { images, condition, details_list, size } = data;

    const validImages = validateImages(images, condition);
    if (validImages) {
      dispath(uploadImages(images));
      if (watch('details_list')?.length === 1 && watch('details_list')?.[0] === '') {
        dispath(uploadDetailsSuccess([]));
      } else {
        dispath(uploadDetails(details_list));
      }
      if (getEditProductData) {
        const replaceRepeatSize = size.map((item) => item.id).filter((sizeItem) => !getEditProductData?.size_variations.find((sizeFind) => sizeFind.size.id === sizeItem));
        if (replaceRepeatSize?.length !== 0) {
          dispath(uploadVariations(replaceRepeatSize));
        } else {
          dispath(uploadVariationsSuccess([]));
        }
      } else {
        dispath(uploadVariations(size.map((item) => item.id)));
      }
    }
  };
  const location = useLocation();

  return (!getEditProductLoading && getEditProductData) || (!getEditProductData && !product_id) ? (
    <S.Wrapper>
      <S.Title>{product_id ? 'Редактировать товар' : 'Продать товар'}</S.Title>
      <S.Description>Подарите своему гардеробу вторую жизнь - продайте то, что вы не носите</S.Description>
      <S.Blocks>
        <PhotoBlock setValue={setValue} watch={watch} errors={errors} name="images" />
        <ContentBlock control={control} trigger={trigger} watch={watch} setValue={setValue} register={register} errors={errors} />
      </S.Blocks>{' '}
      <MessageModal
        open={showSellerThanksModal}
        onClose={() => {
          navigate('/profile/sellitems');
          dispath(setShowSellerThanksModal(false));
        }}
        title={'Спасибо! Объявление на проверке'}
        desc={'Покупатели увидят его сразу после проверки'}
        textFirstBtn={'Добавить еще товар'}
        onClickSecondBtn={() => {
          dispath(setShowSellerThanksModal(false));
          navigate('/profile/sellitems');
        }}
        onClickFirstBtn={() => window.location.reload(false)}
        textSecondBtn={'Закрыть'}
      />
      {(uploadDetailsLoading || uploadImagesLoading || addProductLoading || editProductLoading || uploadVariationsLoading) && <Loading />}
      <S.Buttons>
        <Button
          onClick={handleSubmit(onSubmit)}
          topGreen
          padding="15px 23px"
          width={isMobile ? '100% ' : '332px'}
          // onClick={() => dispath(setShowSellerThanksModal(true))}
        >
          Опубликовать этот товар
        </Button>
        <S.Accept>Нажимая кнопку «Опубликовать этот товар», вы соглашаетесь с «Публичной офертой для продавцов» и «Правилами пользования»</S.Accept>
      </S.Buttons>
      <MessageModal
        open={showPhotoRecomendModal}
        onClose={() => dispath(setShowPhotoRecomendModal(false))}
        title={''}
        desc={
          <div style={{ textAlign: 'left', marginTop: '-50px' }}>
            Чтобы быстрее продать товар, следуйте следующим рекомендациям: <br />
            <br />
            1. Загрузите четкие фото с учетом следов носки, если они имеются. Например, если есть небольшие царапины, потёртости, ваши описание и фото должны их отображать. <br />
            2. В описании пишите актуальную информацию о товаре. Например, маломерит ли он, отличается ли цвет от фото и тд. <br />
            3. Постарайтесь фотографировать вещи на белом фоне - так они смотрятся более выигрышно. <br />
            4. Если вы передумали продавать товар, удалите его с вашего аккаунта.
          </div>
        }
      />
    </S.Wrapper>
  ) : getEditProductError ? (
    <NotFound title={'Товар не найден'} />
  ) : (
    <div style={{ minHeight: '500px', position: 'relative' }}>
      <Loading relative />
    </div>
  );
};

export default SellProduct;
