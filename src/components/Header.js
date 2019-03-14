import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  width: 35vw;
  > * {
    color: white;
  }
`;

function Header() {
  return (
    <Container>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/portfolio">Portfolio</Link>
    </Container>
  );
}

export default Header;
