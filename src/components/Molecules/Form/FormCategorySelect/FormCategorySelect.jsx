import SearchInput from "components/Atoms/Form/SearchInput";
import { useEffect, useState } from "react";
import * as S from "./Styled";
import OutsideClickHandler from "react-outside-click-handler";
import FormCheckBox from "../FormCheckBox";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "redux/actions/categories";
import CategorySelectModal from "./CategorySelectModal/CategorySelectModal";

const FormCategorySelect = ({
  value,
  setValue,
  label,
  placeholder,
  type,
  firstCategory,
  setFirstCategory,
  secondCategory,
  setSecondCategory,
  thirdCategory,
  setThirdCategory,
}) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);

  const [open, setOpen] = useState(false);
  const [activeCat, setActiveCat] = useState(false);

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <S.Wrapper>
      <CategorySelectModal
        firstCategory={firstCategory}
        setFirstCategory={setFirstCategory}
        secondCategory={secondCategory}
        setSecondCategory={setSecondCategory}
        thirdCategory={thirdCategory}
        setThirdCategory={setThirdCategory}
        active={activeCat}
        setActive={setActiveCat}
      />
      <div>
        <S.Label>{label}</S.Label>
      </div>

      <S.Input
        onChange={(e) => setValue(e.target.value)}
        onClick={() => {
          setOpen(!open);
          setActiveCat(true);
        }}
        placeholder={placeholder}
        type={type}
      >
        {firstCategory &&
          secondCategory &&
          thirdCategory &&
          `${firstCategory?.title} / ${secondCategory?.title} / ${thirdCategory?.title}`}
        {value}
      </S.Input>
    </S.Wrapper>
  );
};

export default FormCategorySelect;
