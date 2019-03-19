import React from 'react';

function NavBar({ className }) {
  return (
    <ul className={className}>
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
    </ul>
  );
}

export default NavBar;
