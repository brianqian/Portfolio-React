import React, { Component } from 'react';
import styled from 'styled-components';

const BrianQian = styled.h1`
  text-align: center;
  width: 100%;
  font-family: 'Inconsolata';
  font-size: 1.4 rem;
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
