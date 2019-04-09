import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 0 2rem;
  color: white;
  font-family: 'Economica';
  display: flex;
  max-width: 100%;
  justify-content: space-evenly;
  > * {
    cursor: pointer;
  }
`;

function PortfolioNav({ children }) {
  return <Container>{children}</Container>;
}

export default PortfolioNav;
