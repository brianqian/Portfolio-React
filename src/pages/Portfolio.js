import React, { Component } from 'react';
import * as Keyframe from '../utils/keyframes';
import styled from 'styled-components';

const Container = styled.div`
  max-height: 85vh;
  width: 100%;
  display: flex;
  &.page-enter {
    animation: ${Keyframe.fadeIn} 0.5s linear;
  }
  /* &.page-exit {
    animation: ${Keyframe.fadeOut} 0.5s linear;
  } */
`;

class Portfolio extends Component {
  render() {
    const {
      pathname,
      state: { origin },
    } = this.props.location;
    const fromSamePage = pathname === origin;
    console.log(fromSamePage, pathname, origin);
    return <Container>portfolio stuff here</Container>;
  }
}

export default Portfolio;
