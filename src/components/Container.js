import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeInMoveUp = keyframes`
0%{top: 45%; color: transparent}
50%{color: white}
100%{top: 0%}

`;

const BrianQian = styled.h1`
  position: relative;
  top: 0%;
  text-align: center;
  width: 100%;
  font-family: 'Inconsolata';
  font-size: 1.4 rem;
  animation: ${fadeInMoveUp} 2.5s linear;
`;

const Span = styled.span`
  font-weight: bold;
`;

class Container extends Component {
  state = {
    initialText: false,
  };

  renderText() {
    return this.state.initialText ? (
      <BrianQian>Hi I'm Brian</BrianQian>
    ) : (
      <BrianQian>
        Brian <Span>Qian</Span>
      </BrianQian>
    );
  }

  render() {
    return (
      <div>
        {this.renderText()}
        {!this.state.initialText && this.props.children}
      </div>
    );
  }
}

export default Container;
