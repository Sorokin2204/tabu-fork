import axios from "axios";
import Button from "components/Atoms/Button";
import Input from "components/Atoms/Form/Input";
import FormCategorySelect from "components/Molecules/Form/FormCategorySelect/FormCategorySelect";
import FormInput from "components/Molecules/Form/FormInput/FormInput";
import FormSelectInput from "components/Molecules/Form/FormSelectInput/FormSelectInput";
import FormTextarea from "components/Molecules/Form/FormTextarea/FormTextarea";
import { API_URL } from "config";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getBrandsOptions,
  getColorOptions,
  getMaterialOptions,
  getSizeOptions,
} from "redux/actions/filterOptions";
import Authenticity from "./Authenticity/Authenticity";
import DetailsBlock from "./DetailsBlock/DetailsBlock";
import PriceBlock from "./PriceBlock/PriceBlock";
import SellerBlock from "./SellerBlock/SellerBlock";
import StateBlock from "./StateBlock/StateBlock";
import * as S from "./Styled";

const ContentBlock = () => {
  const dispatch = useDispatch();
  const brands = useSelector((state) => state.filterOptions.brandOptions);
  const colors = useSelector((state) => state.filterOptions.colorOptions);
  const materials = useSelector((state) => state.filterOptions.materialOptions);
  const sizes = useSelector((state) => state.filterOptions.sizeOptions);

  const [firstCategory, setFirstCategory] = useState(null);
  const [secondCategory, setSecondCategory] = useState(null);
  const [thirdCategory, setThirdCategory] = useState(null);

  const [brand, setBrand] = useState("");
  const [color, setColor] = useState("");
  const [material, setMaterial] = useState("");
  const [size, setSize] = useState("");
  const [description, setDescription] = useState("");
  const [comment, setComment] = useState("");
  const [state, setState] = useState("new");
  const [details, setDetails] = useState([]);
  const [price, setPrice] = useState(0);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [region, setRegion] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [homeNumber, setHomeNumber] = useState("");
  const [apartNumber, setApartNumber] = useState("");

  const [serial, setSerial] = useState("");
  const [model, setModel] = useState("");

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
    const token = localStorage.getItem("token");
    const data = {
      title: name,
      description: "string",
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
        document.location.href = "/";
      })
      .catch((reason) => {
        console.log(reason);
        console.log(data);
      });
  };

  return (
    <S.ContentBlock>
      <S.TitleBlock>ДОБАВЛЕНИЕ ТОВАРА</S.TitleBlock>
      <S.Form>
        <FormCategorySelect
          firstCategory={firstCategory}
          setFirstCategory={setFirstCategory}
          secondCategory={secondCategory}
          setSecondCategory={setSecondCategory}
          thirdCategory={thirdCategory}
          setThirdCategory={setThirdCategory}
          placeholder="Выберите категорию"
          label="Категория"
        />
        <FormSelectInput
          value={brand}
          setValue={setBrand}
          placeholder="Выберите бренд"
          label="Бренд"
          options={brands}
        />
        <FormSelectInput
          value={color}
          setValue={setColor}
          placeholder="Выберите цвет"
          label="Цвет"
          options={colors}
        />
        <FormSelectInput
          value={material}
          setValue={setMaterial}
          placeholder="Выберите материал"
          label="Материал"
          options={materials}
        />
        <FormSelectInput
          value={size}
          setValue={setSize}
          placeholder="Выберите размер"
          label="Размер"
          options={sizes}
        />
        <FormTextarea
          value={description}
          setValue={setDescription}
          placeholder=""
          label="Описание"
        />
        <FormTextarea
          value={comment}
          setValue={setComment}
          placeholder=""
          label="Комментарии"
        />
      </S.Form>
      <StateBlock state={state} setState={setState} />
      <DetailsBlock details={details} setDetails={setDetails} />
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
      <Authenticity
        serial={serial}
        setSerial={setSerial}
        model={model}
        setModel={setModel}
        vintage={vintage}
        anther={anther}
        box={box}
        setVintage={setVintage}
        setAnther={setAnther}
        setBox={setBox}
      />

      <S.Buttons>
        <Button grayBorder onClick={onSubmit}>
          Опубликовать этот товар
        </Button>
        <Button topGreen padding="14px 23px" margin="0 0 0 32px">
          Добавить еще товар
        </Button>
      </S.Buttons>
    </S.ContentBlock>
  );
};

export default ContentBlock;
