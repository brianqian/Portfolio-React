import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

const ImgContainer = styled.div`
  height: 200px;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const Image = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-color: teal;
  display: flex;
  align-items: center;
  justify-content: center;
  ${ImgContainer}:hover & {
    opacity: 0.2;
  }
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: -100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Markazi Text";
  background-color: #00000065;
  color: white;
  transition: all 250ms;
  ${ImgContainer}:hover & {
    transform: translateY(100%);
    z-index: 3;
  }
`;

class ProgressItem extends Component {
  render() {
    return (
      <Container>
        <h2>{this.props.title}</h2>
        <ImgContainer>
          <Overlay>{this.props.description}</Overlay>
          <Image>I'm the Image</Image>
        </ImgContainer>
      </Container>
    );
  }
}

export default ProgressItem;
