import React, { Component } from 'react';
import Header from '../components/Header';
import { Route } from 'react-router-dom';

class AboutMe extends Component {
  render() {
    return (
      <div>
        <Header />
        <p>general about me.</p>
      </div>
    );
  }
}

export default AboutMe;
