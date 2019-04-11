import React, { Component } from 'react';
import styled from 'styled-components';

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
  height: 100%;
`;

const Span = styled.span`
  color: #ff9007;
`;

const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 80%;
  margin: auto;
  color: #ff9007;
  @media (max-width: 780px) {
    grid-template-columns: 1fr 1fr;
  }
  > p {
    margin: 0.5rem;
  }
`;

class AboutMe extends Component {
  state = {
    selectionIndex: 0,
  };

  render() {
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
        <div>I'm from the Bay Area and I'm a Web Developer.</div>
        <div>
          <p>Skills: </p>
          <SkillGrid>{currentSkills}</SkillGrid>
          <p>
            I've always been drawn to complicated systems and how they work. My interests of problem
            solving and optimizing systems led me to the path of computer engineering. I'm always
            looking to learn more to become a better programmer.
          </p>
        </div>
      </Container>
    );
  }
}

export default AboutMe;
