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
  > h1 {
    margin: 0;
  }
`;

const Stack = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  cursor: default;
  > p {
    display: none;
    font-size: 0.65em;
    @media (max-width: 780px) {
      display: block;
    }
  }
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
  margin: 1rem 0;
`;

const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  align-items: end;
  @media (max-width: 780px) {
    grid-template-columns: 1fr;
  }
  > img {
    margin: 1.5rem 0 0 0;
    box-sizing: border-box;
    width: 100%;
    max-height: 150px;
    object-fit: contain;
    position: relative;
    left: 0;
    top: 0;
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
  margin: 0.5rem 0;
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
  state = {
    img1: 'contain',
    img2: 'contain',
    img3: 'contain',
  };
  onClick = e => {
    e.stopPropagation();
    const { name } = e.target;
    this.setState({ [name]: this.state[name] === 'contain' ? 'fill' : 'contain' });
  };
  render() {
    const { title, stack, description, gitURL, deployURL, img1, img2, img3 } = this.props;
    const joinStack = stack.map((tech, i) => <span key={`${title}-${i}`}>{tech}</span>);
    const mobileJoinStack = [<p key={title}>Built with: {stack.join(', ')}</p>];
    return (
      <Container>
        <h1>{title} </h1>
        <Stack>
          {joinStack}
          {mobileJoinStack}
        </Stack>
        <ImageContainer onClick={this.onClick}>
          {img1 && <img src={img1} name="img1" alt="" />}
          {img2 && <img src={img2} name="img2" alt="" />}
          {img3 && <img src={img3} name="img3" alt="" />}
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
        <Description>{description}</Description>
      </Container>
    );
  }
}

export default PortfolioItem;
