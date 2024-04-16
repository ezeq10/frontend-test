import styled from "styled-components";

export const StyledBuyButton = styled.button`
  background: transparent;
  border-radius: 16px;
  border: 2px solid red;
  color: red;
  width: 70px;
  height: 30px;
  font-size: 16px;
  &:hover {
    background-color: red;
    color: white;
    cursor: pointer;
  }
`;