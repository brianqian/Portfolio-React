import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
0%{ color: transparent;}
100%{color: white;}
`;

// const moveAround = keyframes`
// 0%{bottom: 0px}
// 100%{bottom: 50px}

// `;
const moveAround = keyframes`
0%{top: 45%; color: transparent}
75%{top: 45%; color: white}
100%{top: 0%;}

`;

const typeOut = keyframes`
from {width: 0}
to {width: 100%}
`;

const blinkCarat = keyframes`
from, to{border-color: transparent}
50%{border-color: white}
`;

const Container = styled.div`
  height: 80vh;
  width: 80vw;
  margin: auto;
  background-color: black;
`;

const Text = styled.h1`
  position: relative;
  left: 45%;
  top: 0%;
  color: white;
  margin: 0 auto;
  animation: ${moveAround} 2s linear;
  /* animation: ${typeOut} 2s alternate, ${blinkCarat} 0.75 step-end infinite; */
`;

class testing extends Component {
  state = {
    color: 'black',
  };

  onClick = () => {
    this.setState({ color: this.state.color === 'black' ? 'white' : 'black' });
  };
  render() {
    return (
      <Container>
        <Text>Hi I'm Brian</Text>
      </Container>
    );
  }
}

export default testing;
