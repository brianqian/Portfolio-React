import React from 'react';
import styled from 'styled-components';

const Component = styled.div`
  margin: 0;
  width: 3rem;
  display: flex;
  grid-row: 1;
  overflow: hidden;
  max-height: 100%;
  align-items: center;
  justify-content: center;
  justify-self: center;
  flex-direction: column;

  > * {
    list-style: none;
    padding: 1rem 0;
  }
`;

function NavBar({ selected }) {
  return (
    <Component>
      <li>
        <a href="#about">
          <img
            src={`./img/circle-${selected === 0 ? 'fill' : 'outline'}-white.svg`}
            height="15px"
            alt=""
          />
        </a>
      </li>
      <li>
        <a href="#portfolio">
          <img
            src={`./img/circle-${selected === 1 ? 'fill' : 'outline'}-white.svg`}
            height="15px"
            alt=""
          />
        </a>
      </li>
      <li>
        <img
          src={`./img/circle-${selected === 2 ? 'fill' : 'outline'}-white.svg`}
          height="15px"
          alt=""
        />
      </li>
    </Component>
  );
}

export default NavBar;
