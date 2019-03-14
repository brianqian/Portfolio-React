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
      <p>hold</p>
    </Container>
  );
}

export default Header;
