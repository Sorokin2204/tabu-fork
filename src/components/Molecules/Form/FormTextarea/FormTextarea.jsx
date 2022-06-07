import * as S from './Styled';

const FormTextarea = ({ errors, style, watch, setValue, register, label, placeholder, type, rules, name }) => {
  return (
    <S.Wrapper style={style}>
      <div
        style={{
          height: '9px',
        }}>
        <S.Label error={errors?.[name]?.message}>{errors?.[name]?.message ?? label}</S.Label>
      </div>

      <S.Textarea placeholder={placeholder} type={type} {...(register && { ...register(name, { ...(rules && rules) }) })} />
    </S.Wrapper>
  );
};

export default FormTextarea;
