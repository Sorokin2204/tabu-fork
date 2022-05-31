import { useEffect, useState } from 'react';
import DetailsItem from './DetailsItem';
import * as S from './Styled';

const DetailsBlock = ({ watch, setValue, name }) => {
  // const [input, setInput] = useState('');
  const value = watch(name);
  console.log(value);
  // const onSubmit = (e) => {
  //   setDetails([...details, { title: input }]);
  //   setInput(0);
  //   e.preventDefault();
  // };

  // const deleteDetail = (index) => {
  //   let allDetails = [...details];
  //   allDetails.splice(index, 1);
  //   setDetails(allDetails);
  // };

  // useEffect(() => {
  //   console.log(details);
  // }, [details]);
  const onAddDetail = () => {
    if (value.length < 10) setValue(name, [...value, '']);
  };
  return (
    <S.Wrapper>
      <S.Title>Детали продукта</S.Title>
      {/* <S.DetailsList>
        {details?.map((detail, i) => (
          <DetailsItem onDelete={deleteDetail} id={i} title={detail.title} />
        ))}
      </S.DetailsList> */}
      <S.Form>
        {value?.map((item, index) => (
          <S.InputWrapper>
            <S.Input
              value={value[index]}
              onChange={(event) => {
                const newList = [...value];
                newList[index] = event.target.value;
                setValue(name, newList);
              }}
            />
            {index > 0 && (
              <S.InputClose
                onClick={() =>
                  setValue(
                    name,
                    value.filter((item, i) => i !== index),
                  )
                }></S.InputClose>
            )}
          </S.InputWrapper>
        ))}
        {value.length < 10 && (
          <div style={{ cursor: 'pointer', margin: '32px auto 0 auto', width: 'min-content', borderRadius: ' 50%', border: '1px solid #717171' }}>
            <S.Add onClick={onAddDetail}></S.Add>
          </div>
        )}
      </S.Form>
    </S.Wrapper>
  );
};

export default DetailsBlock;
