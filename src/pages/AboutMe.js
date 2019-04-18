import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  color: ${props => props.theme.text};
  font-family: "${props => props.theme.mainFont}";
  font-size: ${props => props.theme.pSize};
  border-radius: 5px;
  box-sizing: border-box;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  scroll-snap-align: start;
  overflow: auto;
  height: 100%;
  > p {
    font-family: ${props => props.theme.subFont};
    margin: 0;
    > a {
      margin: 0 0.5rem;
    }
  }
`;

const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 80%;
  margin: 2rem auto;
  color: ${props => props.theme.accent};
  @media (max-width: 780px) {
    grid-template-columns: 1fr 1fr;
  }
  > p {
    margin: 0;
  }
`;

class AboutMe extends Component {
  state = {
    selectionIndex: 0,
  };

  render() {
    const currentSkills = [
      "Javascript",
      "React",
      "Redux",
      "Node",
      "Express",
      "SQL",
      "MongoDB",
      "Jest",
      "Enzyme",
      "jQuery",
    ].map((skill, i) => <p key={i}>{skill}</p>);
    return (
      <Container id="about">
        <h1>
          Hi my name is <span style={{ color: "#ff9007" }}>Brian</span>
        </h1>
        <p>I'm from the Bay Area and I'm a full stack web developer specializing in React.</p>
        <p>
          Find me here:
          <a href="https://github.com/brianqian/" rel="noopener noreferrer" target="_blank">
            <img src="./img/social_icons/GitHub-Light-64px.png" height="30px" alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/brian-qian/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src="./img/social_icons/In-White-41px.png" height="30px" alt="" />
          </a>
        </p>

        <SkillGrid>{currentSkills}</SkillGrid>
        <p>
          I've always been drawn to complicated systems and how they work. My passion for problem
          solving and optimizing systems are what led me to computer engineering. I'm always looking
          to learn more to become a better programmer. Currently I'm working on picking up Postgres,
          GraphQL, and making an online Codenames based game.
        </p>
      </Container>
    );
  }
}

export default AboutMe;
