import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 85%;
  width: 100%;
`;

function ContactBar() {
  return (
    <Container>
      <a href="https://www.linkedin.com/in/brian-qian/" rel="noopener noreferrer" target="_blank">
        <img src="../img/LinkedIn-icon-light.png" alt="" />
      </a>
      <a href="https://www.github.com/brianqian" rel="noopener noreferrer" target="_blank">
        <img src="../img/GitHub-Icon-light.png" alt="" />
      </a>
    </Container>
  );
}

export default ContactBar;
