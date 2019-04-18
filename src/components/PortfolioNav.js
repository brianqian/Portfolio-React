import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 0 2em;
  color: ${props => props.theme.text};
  font-family: ${props => props.theme.mainFont};
  display: flex;
  max-width: 100%;
  user-select: none;
  justify-content: space-evenly;
  margin: 1rem 0;
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
