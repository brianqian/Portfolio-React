import React, { Component } from 'react';
import BoxLink from '../components/BoxLink';
// import Container from '../components/Container';
import ContactBar from '../components/ContactBar';
import AboutMe from '../pages/AboutMe';
import Portfolio from '../pages/Portfolio';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import Testing from './testing';

// const GlobalStyle = createGlobalStyle`

// body{
//   background-color: #333;
//   margin: 1rem 2rem;
//   height: 100vh;
//   color: #eaeaea;
//   font-family: 'PT Sans Narrow'
// }
// `;

const enterTitle = keyframes`
0%{color: white}
100%{color: black}

`;

const fadeIn = keyframes`
0%{opacity: 0}
85%{opacity: 0}
100%{opacity: 1}

`;

const GlobalContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  justify-content: center;
  grid-template-rows: 10% 80% 10%;
`;

const PageContainer = styled.div`
  display: flex;
  width: ${props => (props.selected ? '100vw' : '100%')}
  /* animation: ${fadeIn} 3s linear; */
`;

const Title = styled.h1`
  position: relative;
  text-align: center;
  /* animation: ${enterTitle} 2s linear; */
`;

const ClickOverlay = styled.div`
  height: 400px;
  width: 200px;
  background-color: transparent;
  z-index: 1;
`;

const Placeholder = styled.div`
  height: ${props => (props.selected ? '100%' : '400px')};
  width: ${props => (props.selected ? '100vw' : '200px')};
  background-color: #d1afd4;
  border: 2px #d1afd4 solid;
  z-index: ${props => (props.selected ? 5 : -1)};
`;

class MainPage extends Component {
  state = {
    aboutSelected: false,
    portfolioSelected: false,
  };

  onOpen = e => {
    const name = `${e.target.id}Selected`;
    this.setState({ [name]: !this.state[name] });
  };

  render() {
    const { bgColor, aboutSelected, portfolioSelected } = this.state;
    return (
      <GlobalContainer>
        <Title>Hi I'm Brian</Title>
        <PageContainer selected={aboutSelected || portfolioSelected}>
          <ClickOverlay onClick={this.onOpen}>
            <Placeholder id="about" selected={aboutSelected} />
            {/* <AboutMe /> */}
          </ClickOverlay>
          <ClickOverlay onClick={this.onOpen}>
            <Placeholder id="portfolio" selected={portfolioSelected} />

            {/* <Portfolio /> */}
          </ClickOverlay>
        </PageContainer>
        <ContactBar />
      </GlobalContainer>
    );
  }
}

export default MainPage;
