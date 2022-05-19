import * as S from "./Styled";

const DetailsItem = ({ title, onDelete, id }) => {
  return (
    <S.DetailsItem>
      <S.DetailsItemTitle>{title}</S.DetailsItemTitle>
      <S.DetailsDelete onClick={() => onDelete(id)}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRrule="evenodd"
            clipRule="evenodd"
            d="M15.2894 5.29479C15.4521 5.13207 15.4521 4.86825 15.2894 4.70553C15.1267 4.54282 14.8629 4.54282 14.7002 4.70553L9.99479 9.41091L5.28942 4.70553C5.1267 4.54282 4.86288 4.54282 4.70016 4.70553C4.53745 4.86825 4.53745 5.13207 4.70016 5.29479L9.40554 10.0002L4.70016 14.7055C4.53745 14.8683 4.53745 15.1321 4.70016 15.2948C4.86288 15.4575 5.1267 15.4575 5.28942 15.2948L9.99479 10.5894L14.7002 15.2948C14.8629 15.4575 15.1267 15.4575 15.2894 15.2948C15.4521 15.1321 15.4521 14.8683 15.2894 14.7055L10.584 10.0002L15.2894 5.29479Z"
            fill="#717171"
          />
        </svg>
      </S.DetailsDelete>
    </S.DetailsItem>
  );
};

export default DetailsItem;
