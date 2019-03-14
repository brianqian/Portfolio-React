import React, { Component } from 'react';
import BoxLink from '../components/BoxLink';
import Container from '../components/Container';
import ContactBar from '../components/ContactBar';
import AboutMe from '../pages/AboutMe';
import Portfolio from '../pages/Portfolio';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

body{
  background-color: #333;
  margin: 1rem 2rem;
  height: 100vh;
  color: #eaeaea;
  font-family: 'PT Sans Narrow'
}
`;

class MainPage extends Component {
  render() {
    return (
      <Container>
        <GlobalStyle />
        <Router>
          <Switch>
            <Route exact path="/" component={BoxLink} />
            {/* <Route exact path="/about" component={AboutMe} />
            <Route exact path="/portfolio" component={Portfolio} /> */}
          </Switch>
        </Router>
        <ContactBar />
      </Container>
    );
  }
}

export default MainPage;
