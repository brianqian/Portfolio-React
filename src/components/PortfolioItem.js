import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-family: 'Economica';
  font-size: 1.3rem;
  color: white;
  display: grid;
  grid-auto-flow: dense;
  min-width: 100%;
  max-width: 100%;
  scroll-snap-align: start;
`;

const Title = styled.div`
  > div {
    display: flex;
    width: 100%;
    justify-content: center;
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
  componentDidMount = () => {
    if (this.props.id === 'project-1') {
      console.log('here');
      const firstProject = document.getElementById('project-1');
      firstProject.addEventListener('scroll', () => console.log('hello'));
      firstProject.addEventListener('click', this.logScroll);
    }
  };
  logScroll = () => {
    const firstProject = document.getElementById('project-1');
    firstProject.scrollLeft += 20;
    let test = firstProject.scrollTop;
    let test2 = firstProject.scrollLeft;
    console.log(test, test2);
  };
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
