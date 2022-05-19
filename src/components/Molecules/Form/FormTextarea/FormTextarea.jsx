import * as S from "./Styled";

const FormTextarea = ({ value, setValue, label, placeholder, type }) => {
  return (
    <S.Wrapper>
      <div>
        <S.Label>{label}</S.Label>
      </div>

      <S.Textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        type={type}
      />
    </S.Wrapper>
  );
};

export default FormTextarea;
