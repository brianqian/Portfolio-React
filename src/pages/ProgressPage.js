import React, { Component } from "react";
import styled from "styled-components";
import ProgressItem from "../components/ProgressItem";
import ProgressData from "../data/ProgressData";

const Container = styled.div`
  min-height: 100%;
  max-height: 100%;
  scroll-snap-align: start;
  color: ${props => props.theme.text};
  font-family: ${props => props.theme.mainFont};
  padding: 1rem;
  overflow: auto;
  > p {
    font-family: ${props => props.theme.subFont};
    font-size: 1.15em;
  }
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 1rem;
`;

class ProgressPage extends Component {
  state = {
    colors: ["#009efa", "#91009e", "#006941", "#fa7000", "#a50000", "#484e6d"],
  };

  componentDidMount = () => {
    const copy = [...this.state.colors];
    let n = copy.length;
    while (n) {
      const i = Math.floor(Math.random() * n--);
      [copy[i], copy[n]] = [copy[n], copy[i]];
    }
    this.setState({ colors: copy });
  };

  render() {
    const items = ProgressData.map((item, i) => (
      <ProgressItem color={this.state.colors[i]} {...item} />
    ));
    return (
      <Container>
        <h1>Resource Page</h1>
        <p>
          I've personally never been a fan of the contact page commonly found in portfolios. I
          thought I would use that space to give a better idea of how I became a programmer by
          listing some of the resources I've used and currently use.
        </p>
        <GridWrapper>{items}</GridWrapper>
      </Container>
    );
  }
}

export default ProgressPage;
