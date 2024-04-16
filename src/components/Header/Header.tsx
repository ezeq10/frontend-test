import React from 'react';
import { StyledHeader } from './Header.styles';

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <img
        src="https://santex.wpengine.com/wp-content/uploads/2019/02/logo-santex@3x.png"
        alt="logo"
      />
      <div>$ 0</div>
    </StyledHeader>
  );
};

export default Header;