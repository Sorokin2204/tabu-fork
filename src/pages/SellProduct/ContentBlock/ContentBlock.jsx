import axios from 'axios';
import Button from 'components/Atoms/Button';
import Input from 'components/Atoms/Form/Input';
import FormCategorySelect from 'components/Molecules/Form/FormCategorySelect/FormCategorySelect';
import FormInput from 'components/Molecules/Form/FormInput/FormInput';
import FormSelectInput from 'components/Molecules/Form/FormSelectInput/FormSelectInput';
import FormTextarea from 'components/Molecules/Form/FormTextarea/FormTextarea';
import { API_URL } from 'config';
import _ from 'lodash';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getBrandsOptions, getColorOptions, getMaterialOptions, getSizeOptions } from 'redux/actions/filterOptions';
import { getEditProduct } from 'redux/actions/product';
import Authenticity from './Authenticity/Authenticity';
import DetailsBlock from './DetailsBlock/DetailsBlock';
import PriceBlock from './PriceBlock/PriceBlock';
import SellerBlock from './SellerBlock/SellerBlock';
import StateBlock from './StateBlock/StateBlock';
import * as S from './Styled';
export const sizeTypes = [
  { id: -1, title: 'Все размеры' },
  { id: 0, title: 'Европейские' },
  { id: 1, title: 'Амерканские' },
  { id: 2, title: 'Дюймы' },
];
const ContentBlock = ({ errors, register, setValue, watch, trigger, control }) => {
  const dispatch = useDispatch();
  const { getEditProductData } = useSelector((state) => state.product);
  const brands = useSelector((state) => state.filterOptions.brandOptions);
  const colors = useSelector((state) => state.filterOptions.colorOptions);
  const materials = useSelector((state) => state.filterOptions.materialOptions);
  const sizes = useSelector((state) => state.filterOptions.sizeOptions);

  const [firstCategory, setFirstCategory] = useState(null);
  const [secondCategory, setSecondCategory] = useState(null);
  const [thirdCategory, setThirdCategory] = useState(null);

  useEffect(() => {
    // dispatch(getBrandsOptions());
    dispatch(getColorOptions());
    dispatch(getMaterialOptions());
    dispatch(getSizeOptions());
  }, []);

  const onSubmit = () => {
    const token = localStorage.getItem('token');
    const data = {
      // title: name,
      description: 'string',
      seller: 1,
      category: 92,
      active: true,
      price: 12,
      size: [2],
      color: 2,
      brand: 2,
      material: 2,
      condition: 1,
      condition_images: [16, 13],
      images: [16, 13],
    };
    axios
      .post(`${API_URL}/products/`, data, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        console.log(data);
        document.location.href = '/';
      })
      .catch((reason) => {
        console.log(reason);
        console.log(data);
      });
  };
  useEffect(() => {
    register('brand', { required: { value: true, message: 'Выберите бренд' } });
    register('color', { required: { value: true, message: 'Выберите цвет' } });
    register('material', { required: { value: true, message: 'Выберите материал' } });
    register('size', { required: { value: true, message: 'Выберите размер' } });
    register('sizeType', { required: { value: true, message: 'Выберите размер' } });
    register('category', { required: { value: true, message: 'Выберите категорию' } });
  }, [register]);
  useEffect(() => {
    setValue('category', thirdCategory);
  }, [thirdCategory]);
  const { product_id } = useParams();
  useEffect(() => {
    if (product_id) {
      setValue('description', getEditProductData?.description);
      // const defaultTestValues = {
      //   title: '',
      //   description: 'Это текст описания',
      //   seller: null,
      //   category: {
      //     id: 100,
      //     slug: 'beisbolky_kepki',
      //     title: 'Бейсболки и кепки',
      //     description: '',
      //     parent: 89,
      //     children: [],
      //     order: null,
      //   },
      //   active: true,
      //   price: '₸ 12 345',
      //   old_price: '₸ 10 000',
      //   size: [
      //     {
      //       id: 5,
      //       title: '36',
      //       size_type: 0,
      //       size_value: '36',
      //     },
      //     {
      //       id: 6,
      //       title: '36.5',
      //       size_type: 0,
      //       size_value: '36.5',
      //     },
      //     {
      //       id: 7,
      //       title: '37',
      //       size_type: 0,
      //       size_value: '37',
      //     },
      //     {
      //       id: 8,
      //       title: '37.5',
      //       size_type: 0,
      //       size_value: '37.5',
      //     },
      //   ],
      //   color: {
      //     id: 1,
      //     title: 'Синий',
      //     color_code: '#07A4EF',
      //   },
      //   brand: {
      //     id: 1,
      //     title: 'Adidas',
      //   },
      //   material: {
      //     id: 1,
      //     title: 'Кашемир',
      //   },
      //   condition: 0,
      //   images: [],
      //   serial_number: 'SER01',
      //   sample: 'Expert 32',
      //   vintage: false,
      //   duster: true,
      //   box: true,
      //   phone_number: '+7 (777) 777-77-77',
      //   region: 'Беларусь',
      //   city: 'Минск',
      //   street: 'ул.Ленина',
      //   number_of_house: '11',
      //   number_of_flat: '22',
      //   details_list: ['1 деталь', '2 деталь', '3 деталь'],
      //   sizeType: {
      //     id: 0,
      //     title: 'Все размеры',
      //   },
      //   comment: 'Это текст комментария',
      // };
    }
  }, [product_id]);
  useEffect(() => {
    if (getEditProductData) {
      setFirstCategory(getEditProductData.category.oneParent);
      setSecondCategory(getEditProductData.category.twoParent);
      setThirdCategory(_.omit(getEditProductData.category, ['oneParent', 'twoParent']));
    }
  }, [getEditProductData]);
  const sizeTypeWatch = watch('sizeType');
  return (
    <S.ContentBlock>
      <S.TitleBlock>{product_id ? 'Редактирование товара' : 'Добавление товара'}</S.TitleBlock>
      <S.Form>
        <FormCategorySelect
          errors={errors}
          name={'category'}
          firstCategory={firstCategory}
          setFirstCategory={setFirstCategory}
          secondCategory={secondCategory}
          setSecondCategory={setSecondCategory}
          thirdCategory={thirdCategory}
          setThirdCategory={setThirdCategory}
          placeholder="Выберите категорию"
          label="Категория"
        />
        <FormSelectInput searchText={'Поиск по брендам'} placeholder="Выберите бренд" label="Бренд" options={brands} errors={errors} watch={watch} setValue={setValue} name="brand" />

        <FormSelectInput trigger={trigger} searchText={'Поиск по цветам'} placeholder="Выберите цвет" label="Цвет" options={colors} errors={errors} watch={watch} setValue={setValue} name="color" />
        <FormSelectInput searchText={'Поиск по материалам'} placeholder="Выберите материал" label="Материал" options={materials} errors={errors} watch={watch} setValue={setValue} name="material" />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridGap: '23px',
          }}>
          <FormSelectInput label="Тип размера" options={sizeTypes} errors={errors} watch={watch} setValue={setValue} name="sizeType" noEmpty={true} />
          <FormSelectInput searchText={'Поиск по размерам'} placeholder="Выберите размер" label="Размер" options={sizeTypeWatch?.id == -1 ? sizes : sizes?.filter((size) => size.size_type === sizeTypeWatch?.id)} errors={errors} watch={watch} setValue={setValue} name="size" multiply />
        </div>

        <FormTextarea errors={errors} watch={watch} setValue={setValue} register={register} placeholder="" label="Описание" name="description" rules={{ required: { value: true, message: 'Заполните описание товара' }, maxLength: { value: 1000, message: 'Количество симовлов не более 1000' } }} />
        <FormTextarea errors={errors} watch={watch} setValue={setValue} register={register} placeholder="" label="Комментарии" name="comment" rules={{ required: false, maxLength: { value: 1000, message: 'Количество симовлов не более 1000' } }} />
      </S.Form>
      <StateBlock watch={watch} name={'condition'} setValue={setValue} />
      <DetailsBlock watch={watch} name={'details_list'} setValue={setValue} />
      <PriceBlock errors={errors} register={register} watch={watch} control={control} />
      <SellerBlock errors={errors} register={register} control={control} />
      <Authenticity errors={errors} register={register} watch={watch} setValue={setValue} />
    </S.ContentBlock>
  );
};

export default ContentBlock;
