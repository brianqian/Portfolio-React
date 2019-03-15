import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Header({ className }) {
  return (
    <div className={className}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/portfolio">Portfolio</Link>
    </div>
  );
}

export default Header;
