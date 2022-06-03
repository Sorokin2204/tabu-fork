import Button from 'components/Atoms/Button';
import Loading from 'components/Loading/Loading';
import MessageModal from 'components/Molecules/ProductPage/ThanksModal/ThanksModal';
import ThankModal from 'components/Molecules/ProductPage/ThanksModal/ThanksModal';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { addProduct, uploadDetails, uploadImages } from 'redux/actions/product';
import { auth } from 'redux/actions/user';
import { setShowMobileCartModal, setShowSellerThanksModal } from 'redux/reducers/appReducer';
import { resetAddProducts } from 'redux/reducers/productReducer';
import { sizes } from 'sizes';
import ContentBlock from './ContentBlock/ContentBlock';
import PhotoBlock, { imageTypes } from './PhotoBlock/PhotoBlock';
import * as S from './Styled';
// import { useHistory } from 'react-router';

const SellProduct = () => {
  const defaultTestValues = {
    title: '',
    description: 'Это текст описания',
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
    comment: 'Это текст комментария',
  };
  const defaultValues = {
    title: '',
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
    sizeType: { id: 0, title: 'Все размеры' },
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
  const { uploadDetailsLoading, uploadImagesLoading, addProductLoading, addProductData } = useSelector((state) => state.product);
  const isMobile = useSelector((state) => state.app.isMobile);
  const showSellerThanksModal = useSelector((state) => state.app.showSellerThanksModal);
  const { uploadDetailsData, uploadImagesData } = useSelector((state) => state.product);

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
    if (uploadDetailsData && uploadImagesData) {
      const newData = { ...getValues() };
      delete newData.sizeType;
      const sellerId = JSON.parse(localStorage.getItem('user'))?.id;
      newData.title = `${newData.brand.title} ${newData.sample}`;
      newData.category = newData.category.id;
      newData.brand = newData.brand.id;
      newData.color = newData.color.id;
      newData.material = newData.material.id;
      newData.details_list = uploadDetailsData;
      newData.condition_images = uploadImagesData;
      newData.images = uploadImagesData;
      newData.number_of_flat = parseInt(newData.number_of_flat);
      newData.number_of_house = parseInt(newData.number_of_house);
      newData.price = newData.price.replace(/[^0-9]+/g, '');
      newData.old_price = newData?.old_price?.replace(/[^0-9]+/g, '');
      newData.phone_number = newData.phone_number.replace(/[^0-9\+]+/g, '');
      newData.seller = sellerId;
      newData.size = newData.size.map((item) => item.id);

      console.log(newData);
      dispath(addProduct(newData));
    }
  }, [uploadDetailsData, uploadImagesData]);
  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (name.includes('images') || name === 'condition') {
        clearErrors('images[2]');
        const validImages = validateImages(value.images, value.condition);
        if (validImages) {
          clearErrors('images');
        }
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const navigate = useNavigate();
  useEffect(() => {
    if (addProductData) {
      dispath(auth());
      dispath(resetAddProducts());

      dispath(setShowSellerThanksModal(true));
    }
  }, [addProductData]);

  const onSubmit = (data) => {
    const { images, condition, details_list } = data;
    console.log(images);
    const validImages = validateImages(images, condition);
    if (validImages) {
      dispath(uploadImages(images));
      dispath(uploadDetails(details_list));
    }
  };
  const location = useLocation();
  console.log(errors);
  return (
    <S.Wrapper>
      <S.Title>Продать товар</S.Title>
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
        desc={'Спасибо! Объявление на проверке'}
        textFirstBtn={'Добавить еще товар'}
        onClickSecondBtn={() => {
          dispath(setShowSellerThanksModal(false));
          navigate('/profile/sellitems');
        }}
        onClickFirstBtn={() => window.location.reload(false)}
        textSecondBtn={'Закрыть'}
      />
      {(uploadDetailsLoading || uploadImagesLoading || addProductLoading) && <Loading />}
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
      </S.Buttons>
    </S.Wrapper>
  );
};

export default SellProduct;
