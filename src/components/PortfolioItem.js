import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-family: 'Economica';
  font-size: 1.3rem;
  color: white;
  min-width: 100%;
  max-width: 100%;
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Title = styled.div`
  > div {
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: default;
    > span {
      background-color: #ff9007;
      /* font-family: 'Open Sans'; */
      font-size: 1rem;
      border-radius: 3px;
      padding: 4px 8px;
      margin: 0 5px;
    }
  }
  > h1 {
    margin: 0.5rem;
  }
`;

const Description = styled.div`
  font-family: 'Markazi Text';
  /* grid-column: 1/2;
  grid-row: 3/5; */
  align-self: center;
`;

const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  align-items: center;
  @media (max-width: 780px) {
    grid-template-columns: 1fr;
  }
  > div {
    @media (max-width: 780px) {
      display: none;
      :nth-child(1) {
        display: block;
      }
    }
  }
`;

class PortfolioItem extends Component {
  render() {
    const { title, stack, desc, img } = this.props;
    const joinStack = stack.map(item => <span>{item}</span>);
    return (
      <Container id={this.props.id}>
        <Title>
          <h1>{title}</h1>
          <div>{joinStack}</div>
        </Title>
        <ImageContainer>
          <div style={{ height: '200px', width: '100%', backgroundColor: 'black' }} />
          <div style={{ height: '200px', width: '100%', backgroundColor: 'black' }} />
          <div style={{ height: '200px', width: '100%', backgroundColor: 'black' }} />
        </ImageContainer>
        <Description>{desc}</Description>
      </Container>
    );
  }
}

export default PortfolioItem;
