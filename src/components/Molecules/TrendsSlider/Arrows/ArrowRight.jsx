import React from "react";
import styled from "styled-components";

const Arrow = styled.div`
  position: absolute;
  z-index: 2;
  top: 42%;
  right: 0;
`;

const ArrowRight = (props) => {
  return (
    <Arrow onClick={props.onClick}>
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="48"
          y="48"
          width="48"
          height="48"
          transform="rotate(-180 48 48)"
          fill="white"
          fillOpacity="0.5"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.4345 32.1658C19.1221 31.8534 19.1221 31.3469 19.4345 31.0345L26.8688 23.6001L19.4345 16.1658C19.1221 15.8534 19.1221 15.3469 19.4345 15.0345C19.7469 14.722 20.2535 14.722 20.5659 15.0345L28.5659 23.0345C28.8783 23.3469 28.8783 23.8534 28.5659 24.1658L20.5659 32.1658C20.2535 32.4783 19.7469 32.4783 19.4345 32.1658Z"
          fill="#191919"
        />
      </svg>
    </Arrow>
  );
};

export default ArrowRight;
