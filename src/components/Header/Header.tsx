import React from 'react';
import { StyledHeader } from './Header.styles';
import { useOrderSubtotalContext } from '../../context/OrderSubtotalContext';

const Header: React.FC = () => {
  const { subtotal } = useOrderSubtotalContext();
  
  return (
    <StyledHeader>
      <img
        src="https://santex.wpengine.com/wp-content/uploads/2019/02/logo-santex@3x.png"
        alt="logo"
      />
      <div>$ {subtotal}</div>
    </StyledHeader>
  );
};

export default Header;