import React, { Component } from 'react';
import styled from 'styled-components';
import Container from '../components/Container';
import AboutMe from '../pages/AboutMe';
import Portfolio from '../pages/Portfolio';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class MainPage extends Component {
  render() {
    return (
      <Router>
        <Container>
          <h1>Hi I'm Brian</h1>
          <Switch>
            <Route exact path="/about" component={AboutMe} />
            <Route exact path="/portfolio" component={Portfolio} />
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default MainPage;
