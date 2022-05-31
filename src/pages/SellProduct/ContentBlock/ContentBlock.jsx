import axios from 'axios';
import Button from 'components/Atoms/Button';
import Input from 'components/Atoms/Form/Input';
import FormCategorySelect from 'components/Molecules/Form/FormCategorySelect/FormCategorySelect';
import FormInput from 'components/Molecules/Form/FormInput/FormInput';
import FormSelectInput from 'components/Molecules/Form/FormSelectInput/FormSelectInput';
import FormTextarea from 'components/Molecules/Form/FormTextarea/FormTextarea';
import { API_URL } from 'config';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { getBrandsOptions, getColorOptions, getMaterialOptions, getSizeOptions } from 'redux/actions/filterOptions';
import Authenticity from './Authenticity/Authenticity';
import DetailsBlock from './DetailsBlock/DetailsBlock';
import PriceBlock from './PriceBlock/PriceBlock';
import SellerBlock from './SellerBlock/SellerBlock';
import StateBlock from './StateBlock/StateBlock';
import * as S from './Styled';

const ContentBlock = ({ errors, register, setValue, watch, trigger }) => {
  const dispatch = useDispatch();
  const brands = useSelector((state) => state.filterOptions.brandOptions);
  const colors = useSelector((state) => state.filterOptions.colorOptions);
  const materials = useSelector((state) => state.filterOptions.materialOptions);
  const sizes = useSelector((state) => state.filterOptions.sizeOptions);
  const sizeTypes = [
    { id: 0, title: 'Все размеры' },
    { id: 1, title: 'Европейские' },
    { id: 2, title: 'Амерканские' },
    { id: 3, title: 'Дюймы' },
  ];
  const [firstCategory, setFirstCategory] = useState(null);
  const [secondCategory, setSecondCategory] = useState(null);
  const [thirdCategory, setThirdCategory] = useState(null);

  const [price, setPrice] = useState(0);

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');
  const [region, setRegion] = useState('');
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [homeNumber, setHomeNumber] = useState('');
  const [apartNumber, setApartNumber] = useState('');

  const [serial, setSerial] = useState('');
  const [model, setModel] = useState('');

  const [vintage, setVintage] = useState(false);
  const [anther, setAnther] = useState(false);
  const [box, setBox] = useState(false);

  useEffect(() => {
    dispatch(getBrandsOptions());
    dispatch(getColorOptions());
    dispatch(getMaterialOptions());
    dispatch(getSizeOptions());
  }, []);

  const onSubmit = () => {
    const token = localStorage.getItem('token');
    const data = {
      title: name,
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
    console.log(thirdCategory);
    setValue('category', thirdCategory);
  }, [thirdCategory]);

  return (
    <S.ContentBlock>
      <S.TitleBlock>ДОБАВЛЕНИЕ ТОВАРА</S.TitleBlock>
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
          <FormSelectInput searchText={'Поиск по размерам'} placeholder="Выберите размер" label="Размер" options={sizes} errors={errors} watch={watch} setValue={setValue} name="size" multiply />
        </div>

        <FormTextarea errors={errors} watch={watch} setValue={setValue} register={register} placeholder="" label="Описание" name="description" rules={{ required: { value: true, message: 'Заполните описание товара' }, maxLength: { value: 1000, message: 'Количество симовлов не более 1000' } }} />
        <FormTextarea errors={errors} watch={watch} setValue={setValue} register={register} placeholder="" label="Комментарии" name="comment" rules={{ required: false, maxLength: { value: 1000, message: 'Количество симовлов не более 1000' } }} />
      </S.Form>
      <StateBlock watch={watch} name={'condition'} setValue={setValue} />
      <DetailsBlock watch={watch} name={'details_list'} setValue={setValue} />
      <PriceBlock price={price} setPrice={setPrice} />
      <SellerBlock
        name={name}
        setName={setName}
        surname={surname}
        setSurname={setSurname}
        phone={phone}
        setPhone={setPhone}
        region={region}
        setRegion={setRegion}
        city={city}
        setCity={setCity}
        street={street}
        setStreet={setStreet}
        homeNumber={homeNumber}
        setHomeNumber={setHomeNumber}
        apartNumber={apartNumber}
        setApartNumber={setApartNumber}
      />
      <Authenticity serial={serial} setSerial={setSerial} model={model} setModel={setModel} vintage={vintage} anther={anther} box={box} setVintage={setVintage} setAnther={setAnther} setBox={setBox} />
    </S.ContentBlock>
  );
};

export default ContentBlock;
