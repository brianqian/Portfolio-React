import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  padding: 2rem;
  width: 100vw;
`;

class PortfolioItem extends Component {
  render() {
    const { title, stack, desc, img } = this.props;
    return (
      <Container>
        <img src="" alt="" />
        <h1>{title}</h1>
        <p>{stack}</p>
        <p>{desc}</p>
      </Container>
    );
  }
}

export default PortfolioItem;
