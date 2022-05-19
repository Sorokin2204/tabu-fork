import React from "react";
import styled from "styled-components";

const Arrow = styled.div`
  position: absolute;
  left: 0;
  z-index: 2;
  top: 42%;
`;

const ArrowLeft = (props) => {
  return (
    <Arrow onClick={props.onClick}>
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="48" height="48" fill="white" fillOpacity="0.5" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M28.5655 15.8342C28.8779 16.1466 28.8779 16.6531 28.5655 16.9655L21.1312 24.3999L28.5655 31.8342C28.8779 32.1466 28.8779 32.6531 28.5655 32.9655C28.2531 33.278 27.7465 33.278 27.4341 32.9655L19.4341 24.9655C19.1217 24.6531 19.1217 24.1466 19.4341 23.8342L27.4341 15.8342C27.7465 15.5217 28.2531 15.5217 28.5655 15.8342Z"
          fill="#191919"
        />
      </svg>
    </Arrow>
  );
};

export default ArrowLeft;
