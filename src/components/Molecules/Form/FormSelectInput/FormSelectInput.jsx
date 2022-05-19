import SearchInput from "components/Atoms/Form/SearchInput";
import { useEffect, useState } from "react";
import * as S from "./Styled";
import OutsideClickHandler from "react-outside-click-handler";
import FormCheckBox from "../FormCheckBox";

const FormSelectInput = ({
  value,
  setValue,
  label,
  placeholder,
  type,
  options,
}) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState();

  return (
    <S.Wrapper>
      <div>
        <S.Label>{label}</S.Label>
      </div>

      <S.Input
        onChange={(e) => setValue(e.target.value)}
        onClick={() => setOpen(!open)}
        placeholder={placeholder}
        type={type}
      >
        {value}
      </S.Input>
      {open && (
        <OutsideClickHandler
          onOutsideClick={() => {
            setOpen(false);
          }}
        >
          <S.Dropdown>
            <SearchInput margin="0 0 0 0" placeholder="Поиск дизайнеров" />
            <S.CheckBoxes>
              {options?.map((option, i) => (
                <FormCheckBox
                  value={option}
                  options={options}
                  name={option.title}
                  onClick={() => {
                    setSelected(option.title);
                    setValue(option.title);
                  }}
                  selected={selected}
                />
              ))}
            </S.CheckBoxes>
          </S.Dropdown>
        </OutsideClickHandler>
      )}
    </S.Wrapper>
  );
};

export default FormSelectInput;
