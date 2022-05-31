import React from 'react';
import './Styled.css';
const Loading = ({ relative, style }) => {
  return relative ? (
    <div class="lds-ripple lds-ripple-absolute" style={style}>
      <div></div>
      <div></div>
    </div>
  ) : (
    <div class="overlay">
      <div class="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
