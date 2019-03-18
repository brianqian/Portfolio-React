import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { slideInLeft, slideOutLeft } from '../utils/keyframes';

const Page = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 400px;
  left: 0;
  text-align: center;
`;

const HomePageElm = styled(Page)`
  &.page-enter {
    animation: ${slideInLeft} 0.2s forwards;
  }
  &.page-exit {
    animation: ${slideOutLeft} 0.2s forwards;
  }
`;
export default class example1 extends Component {
  render() {
    return (
      <HomePageElm>
        <h2>Home Page</h2>
        <p>
          This page demonstrate the page transition animation done on react router URLs with styled
          components and react-transition-group.{' '}
        </p>
        <p>To view the page transition, click on below link.</p>
        <Link to="/about">Go to Page Two →</Link>
      </HomePageElm>
    );
  }
}
