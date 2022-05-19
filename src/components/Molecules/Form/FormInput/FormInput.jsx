import * as S from "./Styled";

const FormInput = ({
  value,
  setValue,
  label,
  placeholder,
  type,
  disabled,
  width,
}) => {
  return (
    <S.Wrapper width={width}>
      <div>
        <S.Label>{label}</S.Label>
      </div>

      <S.Input
        value={value}
        onChange={(e) => !disabled && setValue(e.target.value)}
        placeholder={placeholder}
        type={type}
      />
    </S.Wrapper>
  );
};

export default FormInput;
