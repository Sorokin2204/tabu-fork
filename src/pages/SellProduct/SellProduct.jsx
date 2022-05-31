import Button from 'components/Atoms/Button';
import MessageModal from 'components/Molecules/ProductPage/ThanksModal/ThanksModal';
import ThankModal from 'components/Molecules/ProductPage/ThanksModal/ThanksModal';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { setShowSellerThanksModal } from 'redux/reducers/appReducer';
import { sizes } from 'sizes';
import ContentBlock from './ContentBlock/ContentBlock';
import PhotoBlock from './PhotoBlock/PhotoBlock';
import * as S from './Styled';

const SellProduct = () => {
  const defaultValues = {
    title: null,
    description: null,
    seller: null,
    category: null,
    active: null,
    price: null,
    old_price: null,
    size: null,
    color: null,
    brand: null,
    material: null,
    condition: 0,
    images: null,
    serial_number: null,
    sample: null,
    vintage: null,
    duster: null,
    box: null,
    phone_number: null,
    region: null,
    city: null,
    street: null,
    number_of_house: null,
    number_of_flat: null,
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
  } = useForm({
    defaultValues,
  });

  const [showPhoto, setShowPhoto] = useState(false);

  const isMobile = useSelector((state) => state.app.isMobile);
  const showSellerThanksModal = useSelector((state) => state.app.showSellerThanksModal);
  const dispath = useDispatch();
  const onSubmit = (data) => {
    console.log(data);
  };
  console.log(errors);
  return (
    <S.Wrapper>
      <S.Title>Продать товар</S.Title>
      <S.Description>Подарите своему гардеробу вторую жизнь - продайте то, что вы не носите</S.Description>
      <S.Blocks>
        <PhotoBlock showPhoto={showPhoto} setShowPhoto={setShowPhoto} />
        <ContentBlock trigger={trigger} watch={watch} setValue={setValue} register={register} errors={errors} />
      </S.Blocks>{' '}
      <MessageModal open={showSellerThanksModal} onClose={() => dispath(setShowSellerThanksModal(false))} title={'Спасибо! Объявление на проверке'} desc={'Спасибо! Объявление на проверке'} textFirstBtn={'Добавить еще товар'} textSecondBtn={'Закрыть'} />
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
