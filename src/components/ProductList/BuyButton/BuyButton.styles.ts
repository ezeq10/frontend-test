import styled from "styled-components";

export const StyledBuyButton = styled.button`
  background: transparent;
  border-radius: 16px;
  border: 2px solid red;
  color: red;
  width: 80px;
  height: 40px;
  font-size: 16px;
  font-weight: bold;
  &:hover {
    background-color: red;
    color: white;
    cursor: pointer;
  }
`;