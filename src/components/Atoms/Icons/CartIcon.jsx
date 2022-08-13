import React from 'react';

const CartIcon = ({ width = 64, height = 64 }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M16.0002 18.6667H48.0002L50.6668 53.3333H13.3335L16.0002 18.6667Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M24 24V16C24 11.5817 27.5817 8 32 8C36.4183 8 40 11.5817 40 16V24" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
};

export default CartIcon;
