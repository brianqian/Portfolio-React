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
  > h1 {
    margin: 0;
  }
`;

const Stack = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  cursor: default;
  > span {
    background-color: #ff9007;
    font-size: 0.65em;
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
    margin: 1.5rem 0 0 0;
    box-sizing: border-box;
    @media (max-width: 780px) {
      display: none;
      :nth-child(1) {
        display: block;
      }
    }
  }
`;

const Links = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  > a {
    height: 100%;
    display: flex;
    margin: 0 1rem;
    align-items: center;
    text-decoration: none;
    > p {
      font-size: 0.75em;
      color: white;
      margin: 0 0.5rem;
      :hover {
        color: #ff9007;
      }
    }
  }
`;

class PortfolioItem extends Component {
  render() {
    const { title, stack, desc, img, gitURL, deployURL } = this.props;
    const joinStack = stack.map(item => <span>{item}</span>);
    return (
      <Container id={this.props.id}>
        <h1>{title} </h1>

        <Stack>{joinStack}</Stack>
        <ImageContainer>
          <div style={{ height: '200px', width: '100%', backgroundColor: 'black' }} />
          <div style={{ height: '200px', width: '100%', backgroundColor: 'black' }} />
          <div style={{ height: '200px', width: '100%', backgroundColor: 'black' }} />
        </ImageContainer>
        <Links>
          <a href={gitURL} rel="noopener noreferrer" target="_blank">
            <img src="./img/GitHub-Light-64px.png" height="14px" alt="" />
            <p>view code</p>
          </a>
          <a href={deployURL} rel="noopener noreferrer" target="_blank">
            <img src="./img/internet.svg" height="14px" alt="" />
            <p>view deployment</p>
          </a>
        </Links>
        <Description>{desc}</Description>
      </Container>
    );
  }
}

export default PortfolioItem;
