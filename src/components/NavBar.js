import React from 'react';
import styled from 'styled-components';

const Component = styled.div`
  margin: 0;
  width: 3rem;
  min-height: 100vh;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  left: 0;
  > * {
    list-style: none;
    padding: 1rem 0;
  }
`;

function NavBar() {
  return (
    <Component>
      <li>
        <a href="#about">
          <img src="./img/circle-outline.svg" height="15px" alt="" />
        </a>
      </li>
      <li>
        <a href="#portfolio">
          <img src="./img/circle-outline.svg" height="15px" alt="" />
        </a>
      </li>
      <li>
        <img src="./img/circle-outline.svg" height="15px" alt="" />
      </li>
    </Component>
  );
}

export default NavBar;
