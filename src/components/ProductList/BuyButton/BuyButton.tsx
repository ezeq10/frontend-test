import React, { MouseEventHandler } from 'react';

interface BuyButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>
}

const BuyButton: React.FC<BuyButtonProps> = ({ onClick }) => {
  return (
    <button onClick={onClick}>Buy</button>
  );
};

export default BuyButton;

