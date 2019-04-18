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
  padding: 1.75rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  user-select: none;
  align-items: center;
  font-family: "Markazi Text";
  background-color: #00000065;
  color: white;
  transition: all 250ms;
  ${ImgContainer}:hover & {
    transform: translateY(100%);
    z-index: 3;
  }
  > a {
    color: white;
    text-decoration: none;
    :hover {
      color: #ff9007;
    }
  }
`;
const InfoButton = styled.div`
  width: 80px;
  height: 15px;
  padding: 5px;
  color: white;
  border: 1px solid white;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 0.55em;
  margin: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    background-color: white;
    color: black;
  }
`;
class ProgressItem extends Component {
  state = {
    expandInfo: false,
  };
  handleClick = () => {
    this.setState({ expandInfo: true });
  };
  resetState = () => {
    this.setState({ expandInfo: false });
  };

  render() {
    const { expandInfo } = this.state;
    const { title, description, subTitle, subURLs } = this.props;
    const moreInfo = subTitle.map((item, i) => (
      <a href={`${subURLs[i]}`} target="_blank" rel="noopener noreferrer">
        {item}
      </a>
    ));
    return (
      <Container>
        <ImgContainer>
          <Overlay onMouseLeave={this.resetState}>
            {expandInfo && moreInfo}
            {!expandInfo && description}
            {!expandInfo && <InfoButton onClick={this.handleClick}>More Info</InfoButton>}
          </Overlay>
          <Image>
            <h2>{title}</h2>
          </Image>
        </ImgContainer>
      </Container>
    );
  }
}

export default ProgressItem;
