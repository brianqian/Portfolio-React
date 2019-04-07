import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-family: 'Economica';
  font-size: 1.3rem;
  color: white;
  display: grid;
  grid-auto-flow: dense;
  min-width: 100%;
  scroll-snap-align: start;
`;

const Title = styled.div`
  /* grid-column: 1;
  grid-row: 2; */
`;

const Description = styled.div`
  font-family: 'Markazi Text';
  /* grid-column: 1/2;
  grid-row: 3/5; */
  align-self: center;
`;

const Image = styled.div`
  /* grid-column: 2;
  grid-row: 2/3; */
`;

const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
`;

class PortfolioItem extends Component {
  render() {
    const { title, stack, desc, img } = this.props;
    const joinStack = stack.join(', ');
    return (
      <Container>
        <Title>
          <h1>{title}</h1>
          <p>{joinStack}</p>
        </Title>
        <ImageContainer>
          <Image style={{ height: '200px', width: '100%', backgroundColor: 'black' }} />
          <Image style={{ height: '200px', width: '100%', backgroundColor: 'black' }} />
          <Image style={{ height: '200px', width: '100%', backgroundColor: 'black' }} />
        </ImageContainer>

        <Description>{desc}</Description>
      </Container>
    );
  }
}

export default PortfolioItem;
