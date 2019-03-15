import React, { Component } from 'react';
import * as Animated from 'animated/lib/targets/react-dom';
import styled from 'styled-components';

const AnimatedDiv = styled(Animated.div)`
  position: absolute;
  top: 62px;
  left: 0;
  width: 100%;
  height: 100%;
`;

const AnimatedWrapper = WrappedComponent =>
  class AnimatedWrapper extends Component {
    state = {
      animate: new Animated.Value(0),
    };
    render() {
      return (
        <AnimatedDiv>
          <WrappedComponent {...this.props} />
        </AnimatedDiv>
      );
    }
  };

export default AnimatedWrapper;
