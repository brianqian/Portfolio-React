import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { slideInRight, slideOutRight } from '../utils/keyframes';

const Page = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 400px;
  left: 0;
  text-align: center;
`;

const DetailsPageElm = styled(Page)`
  background-color: #90caf9;
  &.page-enter {
    animation: ${slideInRight} 0.2s forwards;
  }
  &.page-exit {
    animation: ${slideOutRight} 0.2s forwards;
  }
`;
export default class example1 extends Component {
  render() {
    return (
      <DetailsPageElm>
        <h2>Details Page</h2>
        <p>
          <img src="https://placeimg.com/200/200/people" />
        </p>
        <p>Demo page. Click below to go back to previous page.</p>
        <Link to="/">← Back to Page One</Link>
      </DetailsPageElm>
    );
  }
}
