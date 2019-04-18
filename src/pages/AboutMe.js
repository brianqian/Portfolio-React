import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #0c1821;
  color: #fff;
  font-family: "Economica";
  font-size: 1.15em;
  border-radius: 5px;
  box-sizing: border-box;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  scroll-snap-align: start;
  overflow: auto;
  height: 100%;
`;

const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 80%;
  margin: 2rem auto;
  color: #ff9007;
  @media (max-width: 780px) {
    grid-template-columns: 1fr 1fr;
  }
  > p {
    margin: 0;
  }
`;

const AltFont = styled.p`
  font-family: "Markazi Text";
  font-size: 1.15em;
  margin: 0;
`;

const Contact = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  justify-content: flex-end;
  > a {
    margin: 0 0.5rem;
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
        <AltFont>
          I'm from the Bay Area and I'm a full stack Web Developer specializing in React.
        </AltFont>
        <div style={{ flex: "9" }}>
          <SkillGrid>{currentSkills}</SkillGrid>
          <AltFont>
            I've always been drawn to complicated systems and how they work. My passion for problem
            solving and optimizing systems are what led me to computer engineering. I'm always
            looking to learn more to become a better programmer. Currently I'm working on picking up
            Postgres, GraphQL, and making an online Codenames game.
          </AltFont>
        </div>
        <Contact>
          contact me:
          <a href="https://github.com/brianqian/">
            <img src="./img/GitHub-Light-64px.png" height="30px" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/brian-qian/">
            <img src="./img/In-White-41px.png" height="30px" alt="" />
          </a>
        </Contact>
      </Container>
    );
  }
}

export default AboutMe;
