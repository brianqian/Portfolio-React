import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  padding: 2rem;
`;

class PortfolioItem extends Component {
  render() {
    return (
      <Container>
        <img src="" alt="" />
        <p>Content</p>
      </Container>
    );
  }
}

export default PortfolioItem;
