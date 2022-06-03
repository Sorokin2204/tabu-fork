import SearchInput from 'components/Atoms/Form/SearchInput';
import { useEffect, useState } from 'react';
import * as S from './Styled';
import OutsideClickHandler from 'react-outside-click-handler';
import FormCheckBox from '../FormCheckBox';

const FormSelectInput = ({ setValue, label, placeholder, options, errors, name, searchText, watch, trigger, noEmpty = false, multiply }) => {
  const [open, setOpen] = useState(false);
  const [searchResault, setSearchResault] = useState(options);
  const [searchTerm, setSearchTerm] = useState('');
  const value = watch(name);

  const onClickMultiply = (option) => {
    const findOption = value?.findIndex((item) => item?.id === option?.id);
    if (findOption === undefined) {
      setValue(name, [option]);
      return;
    }
    if (findOption === -1) {
      setValue(name, [...value, option]);
      return;
    }

    const valueWithoutRemoveOption = value.filter((item) => item?.id !== option?.id);
    setValue(name, valueWithoutRemoveOption);
  };
  const onClickNoEmpty = (option) => {
    if (value?.id === option?.id) {
      setOpen(false);
    } else {
      setValue(name, option);
      setOpen(false);
    }
  };

  const onClickDefault = (option) => {
    if (value?.id === option?.id) {
      setValue(name, null);
      setOpen(false);
    } else {
      setValue(name, option);
      setOpen(false);
    }
  };
  useEffect(() => {
    if (options?.length !== 0) {
      const search = options?.filter((item) => new RegExp(searchTerm, 'gi').test(item?.title));
      setSearchResault(search);
    }
  }, [searchTerm, options]);

  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        setOpen(false);
      }}>
      <S.Wrapper>
        <div>
          <S.Label error={errors?.[name]?.message}>{errors?.[name]?.message ?? label}</S.Label>
        </div>

        <S.Input
          open={open}
          selected={value}
          // onChange={(e) => setValue(e.target.value)}
          onClick={() => {
            if (open) {
              setOpen(false);
            } else {
              setOpen(true);
            }
          }}
          placeholder={placeholder}>
          {multiply ? value?.map((item) => item?.title).join(' | ') : value?.title}
        </S.Input>
        {open && (
          <S.Dropdown>
            {searchText && (
              <SearchInput
                value={searchTerm}
                setValue={(text) => {
                  setSearchTerm(text);
                }}
                margin="0 0 0 0"
                placeholder={searchText}
              />
            )}

            <S.CheckBoxes search={searchText}>
              {searchResault?.length !== 0 ? (
                searchResault?.map((option, i) => (
                  <FormCheckBox
                    value={option?.id}
                    options={options}
                    name={option.title}
                    onClick={() => {
                      if (noEmpty) {
                        onClickNoEmpty(option);
                      } else if (multiply) {
                        onClickMultiply(option);
                      } else {
                        onClickDefault(option);
                      }
                    }}
                    selected={multiply ? value?.find((item) => item.id === option?.id) : value?.id === option?.id}
                  />
                ))
              ) : (
                <S.EmptySearch>Ничего не найдено</S.EmptySearch>
              )}
            </S.CheckBoxes>
          </S.Dropdown>
        )}
        {value && !noEmpty && (
          <S.ResetSelected
            onClick={() => {
              setValue(name, null);
              setOpen(false);
            }}></S.ResetSelected>
        )}
      </S.Wrapper>
    </OutsideClickHandler>
  );
};

export default FormSelectInput;
