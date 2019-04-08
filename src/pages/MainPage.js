import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import AboutMe from '../pages/AboutMe';
import Portfolio from '../pages/Portfolio';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from '../components/NavBar';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Cutive+Mono|Economica|Markazi+Text|Open+Sans');
body, html{
  margin: 0;
}
::-webkit-scrollbar {
    width: 0px;
    background: transparent;  
}
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  min-height: 100vh;
`;

const BackgroundImage = styled.div`
  background-color: #38618c;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='152' height='152' viewBox='0 0 152 152'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='temple' fill='%23c7badb' fill-opacity='0.13'%3E%3Cpath d='M152 150v2H0v-2h28v-8H8v-20H0v-2h8V80h42v20h20v42H30v8h90v-8H80v-42h20V80h42v40h8V30h-8v40h-42V50H80V8h40V0h2v8h20v20h8V0h2v150zm-2 0v-28h-8v20h-20v8h28zM82 30v18h18V30H82zm20 18h20v20h18V30h-20V10H82v18h20v20zm0 2v18h18V50h-18zm20-22h18V10h-18v18zm-54 92v-18H50v18h18zm-20-18H28V82H10v38h20v20h38v-18H48v-20zm0-2V82H30v18h18zm-20 22H10v18h18v-18zm54 0v18h38v-20h20V82h-18v20h-20v20H82zm18-20H82v18h18v-18zm2-2h18V82h-18v18zm20 40v-18h18v18h-18zM30 0h-2v8H8v20H0v2h8v40h42V50h20V8H30V0zm20 48h18V30H50v18zm18-20H48v20H28v20H10V30h20V10h38v18zM30 50h18v18H30V50zm-2-40H10v18h18V10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  background-repeat: repeat;
  z-index: -1;
  position: absolute;
  left: 0;
  top: 0;
  min-height: 100vh;
  min-width: 100vw;
`;

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 5% 11fr 5%;
  grid-template-rows: 100%;
  background-color: #0c1821;
  color: #d6bb33;
  font-family: 'Cutive Mono';
  font-size: 1.15rem;
  max-height: 80vh;
  text-align: center;
  align-self: center;
  justify-self: center;
  width: 95%;
  min-height: 95vh;
  margin: auto;
  border-radius: 20px;
  border: 5px solid white;
`;

const Content = styled.div`
  max-height: 100%;
  overflow: auto;
  scroll-snap-type: y mandatory;
`;

class MainPage extends Component {
  // componentDidMount = () => {
  //   const test = document.getElementById('test');
  //   test.addEventListener('scroll', this.checkScroll);
  // };
  // checkScroll = e => {
  //   const test = document.getElementById('test');
  //   let item = test.scrollY;
  //   let item2 = test.scrollX;
  //   console.log(item, item2, test);
  // };
  render() {
    return (
      <Container>
        <BackgroundImage />
        <GlobalStyle />
        <ContentContainer>
          <NavBar />
          <Content id="test">
            <AboutMe />
            <Portfolio />
          </Content>
        </ContentContainer>
      </Container>
    );
  }
}

export default MainPage;
