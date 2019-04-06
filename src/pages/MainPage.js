import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import AboutMe from '../pages/AboutMe';
import Portfolio from '../pages/Portfolio';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from '../components/NavBar';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Cutive+Mono|Economica|Markazi+Text');
body, html{
  margin: 0;
  background-color: #eaeaea;
}
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  overflow: auto;
  padding: 0 3rem;
`;

class MainPage extends Component {
  render() {
    return (
      <Container>
        <NavBar />
        <GlobalStyle />

        <AboutMe />
        <Portfolio />
      </Container>
    );
  }
}

export default MainPage;
