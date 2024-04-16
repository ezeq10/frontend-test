import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: red;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  img {
    max-width: 150px; /* Adjust as needed */
    height: auto;
  }

  div {
    color: white;
  }
`;