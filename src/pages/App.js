import React, { Component } from 'react';
import ContactBar from '../components/ContactBar';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled, { keyframes, createGlobalStyle } from 'styled-components';
import Header from '../components/Header';
import Home from '../pages/Home';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Example1 from '../pages/example1';
import Example2 from '../pages/example2';

const GlobalStyle = createGlobalStyle`

body{
  background-color: #333;
  margin: 0;
  height: 100vh;
  color: #eaeaea;
  font-family: 'PT Sans Narrow'
}
`;
const StyledHeader = styled(Header)`
  display: flex;
  align-items: center;
  flex: 0.5;
  justify-content: space-between;
  width: 100vw;
  text-align: center;
  > * {
    color: white;
  }
`;

const Footer = styled(ContactBar)`
  flex: 0.5;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
`;

const Main = styled.main`
  flex: 9;
  max-width: 100vw;
  overflow: auto;
  height: 100%;
  display: flex;
`;
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
  max-width: 100vw;
  overflow: auto;
`;

class App extends Component {
  render() {
    return (
      <Router>
        <Route
          render={({ location, ...props }) => {
            return (
              <PageContainer>
                <GlobalStyle />
                <StyledHeader />
                <Main>
                  <TransitionGroup component={null}>
                    <CSSTransition timeout={500} classNames="page" key={location.key}>
                      <Switch location={location}>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={AboutMe} />
                        <Route exact path="/portfolio" component={Portfolio} />
                      </Switch>
                    </CSSTransition>
                  </TransitionGroup>
                </Main>
                <Footer />
              </PageContainer>
            );
          }}
        />
      </Router>
    );
  }
}

export default App;

// const enterTitle = keyframes`
// 0%{color: white}
// 100%{color: black}
// `;
