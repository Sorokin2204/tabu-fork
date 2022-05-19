import styled from "styled-components";

const StyledImageBlock = styled.div`
  width: 100%;
  height: auto;
  margin: ${({ margin }) => margin || ""};
`;

const ImageRef = styled.img`
  width: 100%;
  height: auto;
`;

const ImageBlock = (props) => {
  return (
    <StyledImageBlock {...props}>
      <ImageRef src={props.src} />
    </StyledImageBlock>
  );
};

export default ImageBlock;
