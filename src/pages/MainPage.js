import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import AboutMe from '../pages/AboutMe';
import Portfolio from '../pages/Portfolio';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from '../components/NavBar';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto');
body, html{
  margin: 0;
  background-color: whitesmoke;
}
`;

const Container = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  overflow: auto;
  padding: 1rem 3rem;
`;

const StyledNav = styled(NavBar)`
  margin: 0;
  padding: 0.5rem;
  min-height: 100vh;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  left: 0;
  > * {
    list-style: none;
    padding: 1rem 0;
  }
`;

class MainPage extends Component {
  render() {
    return (
      <Container>
        <StyledNav />
        <GlobalStyle />
        <h1>Hi I'm Brian</h1>
        <AboutMe />
        <Portfolio />
      </Container>
    );
  }
}

export default MainPage;
