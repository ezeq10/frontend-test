import React, { MouseEventHandler } from 'react';
import { StyledBuyButton } from './BuyButton.styles';

interface BuyButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>
}

const BuyButton: React.FC<BuyButtonProps> = ({ onClick }) => {
  return <StyledBuyButton onClick={onClick}>Buy</StyledBuyButton>;
};

export default BuyButton;

