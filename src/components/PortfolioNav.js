import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 0 2em;
  color: white;
  font-family: 'Economica';
  display: flex;
  max-width: 100%;
  user-select: none;
  justify-content: space-evenly;
  > * {
    cursor: pointer;
  }
  @media (max-width: 780px) {
    padding: 0;
  }
`;

function PortfolioNav({ children }) {
  return <Container>{children}</Container>;
}

export default PortfolioNav;
