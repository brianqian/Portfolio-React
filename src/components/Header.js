import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

function Header({ className, location }) {
  console.log(location);
  return (
    <div className={className}>
      <Link to={{ pathname: '/', state: { origin: location.pathname } }}>Home</Link>
      <Link to={{ pathname: '/about', state: { origin: location.pathname } }}>About</Link>
      <Link to={{ pathname: '/portfolio', state: { origin: location.pathname } }}>Portfolio</Link>
    </div>
  );
}

export default withRouter(Header);
