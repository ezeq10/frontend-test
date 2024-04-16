import styled from "styled-components";

export const StyledProductGridItem = styled.div`
  display: flex;
  flex-direction: column;
  height: 600px;
  position: relative;
  padding-bottom: 20px;
`;

export const StyledProductImage = styled.img`
  width: 100%;
  height: 450px;
`;

export const StyledProductPriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: absolute;  
  left: 5px; 
  bottom: 2px;
  marginTop: 10px;
`;
