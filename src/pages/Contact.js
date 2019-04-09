import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  min-height: 100%;
  scroll-snap-align: start;
`;

class Contact extends Component {
  render() {
    return (
      <Container id="contact">
        <p>Contact me:</p>
        <p>email:</p>
        <p>github</p>
        <p>linkedin</p>
      </Container>
    );
  }
}

export default Contact;
