import { useState } from "react";
import { useDispatch } from "react-redux";
import { getCategories, getSearchProducts } from "redux/actions/search";
import * as S from "./Styled";

const Input = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const searchSubmit = () => {
    dispatch(getSearchProducts(value));
    dispatch(getCategories(value));
  };

  return (
    <S.Wrapper>
      <S.Container>
        <S.Subcont>
          <S.Icon>
            <svg
              width={16}
              height={14}
              viewBox="0 0 16 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.88757 8.84615L9.46483 8.57916L9.21695 8.97163L9.58996 9.24793L9.88757 8.84615ZM10.0589 8.57485L9.63618 8.30785L10.0589 8.57485ZM9.77993 2.07608L9.69822 1.99181L8.98032 2.68796L9.06203 2.77223L9.77993 2.07608ZM10.3103 9.11315L10.4817 8.84185L9.63618 8.30785L9.46483 8.57916L10.3103 9.11315ZM9.58996 9.24793L14.7024 13.0349L15.2976 12.2314L10.1852 8.44438L9.58996 9.24793ZM9.06203 2.77223C10.5083 4.26368 10.7456 6.55133 9.63618 8.30785L10.4817 8.84185C11.8376 6.69499 11.5476 3.89896 9.77993 2.07608L9.06203 2.77223ZM1.76632 9.26516C3.99873 11.8845 8.12222 11.8532 10.278 9.1585L9.49714 8.53381C7.73955 10.7308 4.35844 10.7649 2.5274 8.61651L1.76632 9.26516ZM2.27773 1.69808C0.0664417 3.64402 -0.136616 7.03239 1.76632 9.26516L2.5274 8.61651C0.97095 6.79027 1.14595 4.02611 2.93836 2.4488L2.27773 1.69808ZM2.93836 2.4488C4.69371 0.904086 7.35256 1.00933 8.98032 2.68796L9.69822 1.99181C7.69907 -0.0698088 4.43358 -0.199067 2.27773 1.69808L2.93836 2.4488Z"
                fill="#191919"
              />
            </svg>
          </S.Icon>
          <S.Input value={value} onChange={(e) => setValue(e.target.value)} />

          <S.Submit onClick={searchSubmit}>
            <svg
              width={14}
              height={8}
              viewBox="0 0 14 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.3536 4.35355C13.5488 4.15829 13.5488 3.84171 13.3536 3.64645L10.1716 0.464465C9.97631 0.269203 9.65973 0.269203 9.46447 0.464465C9.2692 0.659727 9.2692 0.97631 9.46447 1.17157L12.2929 4L9.46447 6.82843C9.2692 7.02369 9.2692 7.34027 9.46447 7.53553C9.65973 7.7308 9.97631 7.7308 10.1716 7.53553L13.3536 4.35355ZM4.37114e-08 4.5L13 4.5L13 3.5L-4.37114e-08 3.5L4.37114e-08 4.5Z"
                fill="#191919"
              />
            </svg>
          </S.Submit>
        </S.Subcont>
      </S.Container>
    </S.Wrapper>
  );
};

export default Input;
