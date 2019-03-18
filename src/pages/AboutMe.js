import React, { Component } from 'react';
import { slideInRight, slideOutLeft, slideOutRight, fadeIn } from '../utils/keyframes';
import styled, { css } from 'styled-components';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const slideAnim1 = css`
  animation: ${slideInRight} 0.5s linear;
`;
const slideAnim2 = css`
  animation: ${slideOutLeft} 0.5s linear;
`;

const Container = styled.div`
  display: block;
  min-width: 100vw;
  background-color: black;
  border: 1rem white solid;
  &.page-enter {
    animation: ${slideInRight} 0.2s forwards;
  }
  &.page-exit {
    animation: ${slideOutRight} 0.2s forwards;
    overflow: hidden;
    max-width: 0vw;
  }
  &.page-exit-done {
    display: none;
  }
`;

const Content = styled.div`
  color: white;
  &.aboutContent-enter {
    /* animation: ${fadeIn} 1s linear; */
  }
`;
const Content2 = styled.div`
  color: white;
  &.aboutContent-enter {
    /* animation: ${fadeIn} 1s linear; */
  }
`;

class AboutMe extends Component {
  state = {
    content: '',
    first: false,
    second: false,
  };
  componentDidMount = async () => {
    // this.setState({ first: true });
    // console.log(this.props.location.state);
  };

  render() {
    const {
      pathname,
      state: { origin },
    } = this.props.location;
    const fromSamePage = pathname === origin;
    console.log(pathname === origin, pathname, origin);
    return (
      <Container samePage={fromSamePage}>
        <p>ABOUT ME</p>
        {/* <CSSTransition in={this.state.first} timeout={1000} classNames="aboutContent">
          {state => {
            return (
              <Content>
                HELLO CONTENT
                <CSSTransition in={state === 'entered'} timeout={1000} classNames="aboutContent">
                  <Content2>MORE CONTENT</Content2>
                </CSSTransition>
              </Content>
            );
          }}
        </CSSTransition> */}
      </Container>
    );
  }
}

export default AboutMe;
