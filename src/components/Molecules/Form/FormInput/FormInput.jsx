import * as S from './Styled';
import { Controller } from 'react-hook-form';
import NumberFormat from 'react-number-format';
const FormInput = ({ value, setValue, label, placeholder, type, disabled, width, style, control, name, register, rules, errors, styleInput }) => {
  return (
    <S.Wrapper width={width} style={style}>
      <div
        style={{
          height: '9px',
        }}>
        <S.Label error={errors?.[name]?.message}>{errors?.[name]?.message ?? label}</S.Label>
      </div>
      {type === 'phone' ? (
        <Controller
          control={control}
          name={name}
          rules={{
            ...rules,
            ...(type === 'phone' && {
              pattern: {
                value: /^(8|\+7)[ ][(][7](00|01|02|07|08|05|71|76|77|75|78|47)[)][ ]\d{3}[-]\d{2}[-]\d{2}$/gm,
                message: 'Неправильный формат телефона',
              },
            }),
          }}
          render={({ field: { onChange, name, value } }) => <NumberFormat style={styleInput} {...(type !== 'phone' || { format: '+7 (7##) ###-##-##', mask: '_' })} name={name} value={value} onChange={onChange} placeholder={placeholder} autoComplete="off" customInput={CustomInput} />}
        />
      ) : type === 'price' ? (
        <Controller
          control={control}
          name={name}
          rules={{
            ...rules,
          }}
          render={({ field: { onChange, name, value } }) => <NumberFormat style={styleInput} name={name} value={value} onChange={onChange} placeholder={placeholder} autoComplete="off" customInput={CustomInput} prefix="₸ " thousandSeparator=" " />}
        />
      ) : type === 'number' ? (
        <Controller
          control={control}
          name={name}
          rules={{
            ...rules,
          }}
          render={({ field: { onChange, name, value } }) => <NumberFormat style={styleInput} name={name} value={value} onChange={onChange} placeholder={placeholder} autoComplete="off" customInput={CustomInput} />}
        />
      ) : (
        <S.Input style={styleInput} autoComplete="off" value={value} onChange={(e) => !disabled && setValue(e.target.value)} placeholder={placeholder} type={type} {...(register && { ...register(name, { ...(rules && rules) }) })} />
      )}
    </S.Wrapper>
  );
};
const CustomInput = (props) => <S.Input {...props} />;
export default FormInput;
