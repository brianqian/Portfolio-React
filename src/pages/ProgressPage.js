import React, { Component } from "react";
import styled from "styled-components";
import ProgressItem from "../components/ProgressItem";
import ProgressData from "../data/ProgressData";

const Container = styled.div`
  min-height: 100%;
  scroll-snap-align: start;
  color: white;
  font-family: "Economica";
  padding: 1rem;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 1rem;
`;

class ProgressPage extends Component {
  render() {
    const items = ProgressData.map(item => <ProgressItem {...item} />);
    return (
      <Container>
        <h1>Resource Page</h1>
        <p>
          I've personally never been a fan of the contact page commonly found in portfolios. I
          thought I would use that space to give a better idea of how I became a programmer by
          listing some of the resources I've used and currently use.
        </p>
        <Wrapper>{items}</Wrapper>
      </Container>
    );
  }
}

export default ProgressPage;
