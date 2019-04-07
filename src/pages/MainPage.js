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
}
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  /* overflow: auto; */
  padding: 0 3rem;
  margin: 2rem;
  height: 100%;
`;

const BackgroundImage = styled.div`
  background-color: #38618c;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23a1cefd' fill-opacity='0.3' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  background-repeat: repeat-y;
  /* background-color: blue; */
  z-index: -5;
  position: absolute;
  left: 0;
  top: 0;
  min-height: 100%;
  min-width: 100vw;
`;

class MainPage extends Component {
  render() {
    return (
      <Container>
        <NavBar />
        <BackgroundImage />
        <GlobalStyle />

        <AboutMe />
        {/* <Portfolio /> */}
      </Container>
    );
  }
}

export default MainPage;
