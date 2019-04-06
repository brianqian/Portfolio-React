import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-family: 'Economica';
  font-size: 1.3rem;
  color: white;
  display: grid;
  /* grid-template-columns: repeat(auto-fit);
  grid-template-rows: 0.5fr repeat(4, 2fr); */
  grid-auto-flow: dense;
  padding: 2rem;
  min-width: calc(100% - 4rem);
  max-width: calc(100% - 4rem);
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

const NavBar = styled.div`
  /* grid-row: 1;
  grid-column: 1/-1; */
`;

class PortfolioItem extends Component {
  render() {
    const { title, stack, desc, img } = this.props;
    const joinStack = stack.join(', ');
    return (
      <Container>
        {/* <img src={img} alt="" /> */}
        <NavBar>scroll navbar container</NavBar>
        <Title>
          <h1>{title}</h1>
          <p>{joinStack}</p>
        </Title>

        <Image style={{ height: '200px', width: '400px', backgroundColor: 'black' }} />

        <Description>{desc}</Description>
      </Container>
    );
  }
}

export default PortfolioItem;
