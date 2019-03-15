import React from 'react';
import styled, { keyframes } from 'styled-components';
import { fadeIn, slideOutLeft } from '../utils/keyframes';

const Container = styled.div`
  width: 100%;
  min-height: 100%;
  background-color: black;
  &.page-enter {
    animation: ${fadeIn} 1s linear;
  }
  &.page-exit {
    animation: ${slideOutLeft} 1s linear;
  }
`;
const Title = styled.h1`
  text-align: center;
`;
function Home() {
  return <Container>Hi I'm Brian</Container>;
}

export default Home;
