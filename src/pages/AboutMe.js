import React, { Component } from 'react';
import styled from 'styled-components';
import aboutData from '../data/AboutData';

// const Link = Scroll.Link;
const Container = styled.div`
  background-color: #0c1821;
  color: #fff;
  font-family: 'Cutive Mono';
  font-size: 1.15em;
  text-align: center;
  border-radius: 5px;
  box-sizing: border-box;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  scroll-snap-align: start;
`;

const Span = styled.span`
  color: #ff9007;
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

const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 80%;
  margin: auto;
  color: #ff9007;
  > p {
    margin: 0.5rem;
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
    const currentSkills = [
      'Javascript',
      'React',
      'Redux',
      'Node',
      'Express',
      'SQL',
      'MongoDB',
      'Jest',
      'Enzyme',
      'jQuery',
    ].map(skill => <p>{skill}</p>);
    return (
      <Container id="about">
        <h1>
          Hi my name is <Span>Brian</Span>
        </h1>
        {/* <DeveloperLine> */}
        <div>I'm from the Bay Area and I'm a Web Developer.</div>
        {/* <img onClick={this.nextSelection} src="./img/up-orange.svg" alt="" />
          <img onClick={this.prevSelection} src="./img/down-orange.svg" alt="" />
        </DeveloperLine>
        <div>{moreInfo}</div> */}
        <div>
          <p>Current skills: </p>
          <SkillGrid>{currentSkills}</SkillGrid>
          <p>
            I've always enjoyed taking things apart and exploring complex systems. I've always had a
            passion for computers and puzzles so coding seemed like a natural progression.
          </p>
          <p>
            Outside of coding some of my favorite activities are rock climbing, board games, and
            seeing live music.
          </p>
        </div>
      </Container>
    );
  }
}

export default AboutMe;
