import React, { Component } from 'react';
import styled from 'styled-components';
import aboutData from '../data/AboutData';

const Container = styled.div`
  background-color: #0c1821;
  color: #ccc9dc;
  font-family: 'Cutive Mono';
  font-size: 1.25rem;
  height: 75vh;
  text-align: center;
  padding: 3rem;
`;

const ArrowContainer = styled.span`
  height: 1.15rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 0.5rem;
  > * {
    height: 0.6rem;
    width: 8px;
  }
`;

const DeveloperLine = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  > img {
    height: 1rem;
    width: 1rem;
    padding: 0.25rem;
  }
`;

class AboutMe extends Component {
  state = {
    selectionIndex: 0,
  };
  nextSelection = () => {
    const nextIndex = (this.state.selectionIndex + 1) % aboutData.length;
    this.setState({ selectionIndex: nextIndex });
  };

  prevSelection = () => {
    let prevIndex = this.state.selectionIndex - 1;
    if (prevIndex < 0) prevIndex = aboutData.length - 1;
    this.setState({ selectionIndex: prevIndex });
  };

  render() {
    const moreInfo = aboutData[this.state.selectionIndex].body.map(line => {
      return <p>{line}</p>;
    });
    return (
      <Container id="about">
        <h1>Hi my name is Brian</h1>
        <p>...and this is my portfolio page.</p>
        <DeveloperLine>
          <div>
            I'm from the Bay Area and I'm a{' '}
            <span>{` ${aboutData[this.state.selectionIndex].title}`}</span>
          </div>
          <img onClick={this.nextSelection} src="./img/up-orange.svg" alt="" />
          <img onClick={this.prevSelection} src="./img/down-orange.svg" alt="" />
        </DeveloperLine>
        <div>{moreInfo}</div>
      </Container>
    );
  }
}

export default AboutMe;
