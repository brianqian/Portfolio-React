import React from 'react';
import styled from 'styled-components';
import { slideInRight, slideOutLeft, slideInLeft } from '../utils/keyframes';

const Container = styled.div`
  min-width: 100vw;
  display: flex;
  background-color: black;
  border: 1rem white solid;
  &.page-enter {
    animation: ${slideInLeft} 0.2s forwards;
  }
  &.page-exit {
    animation: ${slideOutLeft} 0.2s forwards;
    overflow: hidden;
    max-width: 0vw;
  }
  &.page-exit-done {
    display: none;
  }
`;
const Title = styled.h1`
  text-align: center;
`;
function Home() {
  return (
    <Container>
      <p>Hi I'm Brian</p>
    </Container>
  );
}

export default Home;
