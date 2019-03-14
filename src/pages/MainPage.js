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
  grid-template-rows: 1fr 8fr 1fr;
`;

const PageContainer = styled.div`
  display: flex;
  height: 100%;
  width: ${props => (props.baseView ? '100%' : '100vw')};
  z-index: 0;
  /* animation: ${fadeIn} 3s linear; */
`;

const Title = styled.h1`
  position: relative;
  text-align: center;
  /* animation: ${enterTitle} 2s linear; */
`;

const ClickOverlay = styled.div`
  display: flex;
  height: 100%;
  background-color: transparent;
  z-index: ${props => (props.baseView ? 1 : -1)};
`;

const Placeholder = styled.div`
  background-color: #d1afd4;
  border: ${props => (props.selected || props.baseView ? '2px #891494 solid' : 'none')};
  box-sizing: border-box;
  position: relative;
  transition: all 0.5s;
  height: ${props => (props.selected ? '100%' : '0')};
  width: ${props => (props.selected ? '92vw' : '0')};
  z-index: ${props => (props.selected ? 2 : -1)};
  ${props =>
    props.baseView ? 'height: 100%; width: 200px;' : ''} /* height: 100%;
  width: 200px; */
`;

// const pPlaceholder = styled(aPlaceholder)`
//   height: ${props => (props.selected ? '100%' : '100%')};
//   width: ${props => (props.selected  ? '100vw' : '200px')};
//   z-index: ${props => (props.selected ? 5 : -1)};

// `

class MainPage extends Component {
  state = {
    baseView: true,
    aSelected: false,
    pSelected: false,
  };

  toggleSelected = async e => {
    if (this.state.baseView) {
      const selected = `${e.currentTarget.id}Selected`;
      await this.setState({ [selected]: !this.state[selected], baseView: false });
    }
  };

  closeBox = e => {
    e.stopPropagation();
    this.setState({ baseView: true, aSelected: false, pSelected: false });
  };

  render() {
    const { bgColor, aSelected, pSelected, baseView } = this.state;
    return (
      <GlobalContainer>
        <Title>Hi I'm Brian</Title>
        <PageContainer data="container" baseView={baseView}>
          <ClickOverlay id="a" data="overlay" baseView={baseView} onClick={this.toggleSelected}>
            <AboutMe data="placeholder" selected={aSelected} baseView={baseView}>
              {!baseView && aSelected && <button onClick={this.closeBox}>CLOSE</button>}
            </AboutMe>
            {/* <AboutMe /> */}
          </ClickOverlay>
          <ClickOverlay id="p" baseView={baseView} onClick={this.toggleSelected}>
            <Placeholder selected={pSelected} baseView={baseView}>
              {!baseView && pSelected && <button onClick={this.closeBox}>CLOSE</button>}
            </Placeholder>

            {/* <Portfolio /> */}
          </ClickOverlay>
        </PageContainer>
        <ContactBar />
      </GlobalContainer>
    );
  }
}

export default MainPage;
