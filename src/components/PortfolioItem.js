import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-family: 'Economica';
  font-size: 1.3em;
  color: white;
  min-width: 100%;
  max-width: 100%;
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Stack = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  cursor: default;
  > span {
    background-color: #ff9007;
    font-size: 0.75em;
    border-radius: 3px;
    padding: 4px 8px;
    margin: 0 5px;
    @media (max-width: 780px) {
      display: none;
    }
  }
`;

const Description = styled.div`
  font-family: 'Markazi Text';
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
    margin: 1.5rem 0;
    box-sizing: border-box;
    @media (max-width: 780px) {
      display: none;
      :nth-child(1) {
        display: block;
      }
    }
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  > h1 {
    margin: 0.5rem;
  }
  > a {
    height: 100%;
    display: flex;
    align-items: center;
  }
`;

class PortfolioItem extends Component {
  render() {
    const { title, stack, desc, img, git } = this.props;
    const joinStack = stack.map(item => <span>{item}</span>);
    return (
      <Container id={this.props.id}>
        <Title>
          <h1>{title} </h1>
          <a href={git} rel="noopener noreferrer" target="_blank">
            <img src="./img/GitHub-Light-64px.png" height="30px" alt="" />
          </a>
        </Title>

        <Stack>{joinStack}</Stack>
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
