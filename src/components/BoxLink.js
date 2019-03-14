import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import AboutMe from '../pages/AboutMe';
import Portfolio from '../pages/Portfolio';

const Container = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, minmax(400px, 1fr));
  grid-auto-flow: column;
  min-height: 50vh;
  > * {
    height: 100%;
  }
`;

const Box = styled.div`
  height: 100%;
  background-color: gray;
  display: ${props => (props.default ? 'flex' : props.focus ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  /* width: ${props => (props.focus ? '100%' : '0%')}; */
  width: ${props => (props.default ? 'auto' : props.focus ? '90vw' : '0%')};

  transition: all 1s;
`;

class BoxLink extends Component {
  state = {
    defaultFocus: true,
    aboutFocus: false,
    portfolioFocus: false,
  };

  toggleFocus = e => {
    const { id } = e.target;
    this.setState({
      [id]: this.state[id] ? false : true,
      defaultFocus: this.state.defaultFocus ? false : true,
    });
  };

  render() {
    const { aboutFocus, portfolioFocus, defaultFocus } = this.state;
    return (
      <Container>
        {/* <Link to="/about"> */}
        <Box onClick={this.toggleFocus} default={defaultFocus} id="aboutFocus" focus={aboutFocus}>
          {(aboutFocus && <AboutMe />) || 'About Me'}
        </Box>
        {/* </Link> */}
        <Link to="/portfolio">
          <Box
            onClick={this.toggleFocus}
            default={defaultFocus}
            id="portfolioFocus"
            focus={portfolioFocus}
          >
            Portfolio
          </Box>
        </Link>
      </Container>
    );
  }
}

export default BoxLink;
