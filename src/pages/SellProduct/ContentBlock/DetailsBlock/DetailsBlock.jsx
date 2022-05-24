import { useEffect, useState } from 'react';
import DetailsItem from './DetailsItem';
import * as S from './Styled';

const DetailsBlock = ({ details, setDetails }) => {
  const [input, setInput] = useState('');

  const onSubmit = (e) => {
    setDetails([...details, { title: input }]);
    setInput(0);
    e.preventDefault();
  };

  const deleteDetail = (index) => {
    let allDetails = [...details];
    allDetails.splice(index, 1);
    setDetails(allDetails);
  };

  useEffect(() => {
    console.log(details);
  }, [details]);

  return (
    <S.Wrapper>
      <S.Title>Детали продукта</S.Title>
      {/* <S.DetailsList>
        {details?.map((detail, i) => (
          <DetailsItem onDelete={deleteDetail} id={i} title={detail.title} />
        ))}
      </S.DetailsList> */}
      <S.Form onSubmit={onSubmit}>
        <S.Input value={input} onChange={(e) => setInput(e.target.value)} />
      </S.Form>
    </S.Wrapper>
  );
};

export default DetailsBlock;
