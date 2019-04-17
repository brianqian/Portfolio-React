import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

class ProgressItem extends Component {
  handleHover = () => {
    console.log("hello");
  };
  render() {
    const style = {
      width: "100%",
      height: "150px",
      backgroundColor: "black",
      border: "3px solid white",
    };
    return (
      <Container>
        {this.props.title}
        <div style={style} onMouseEnter={this.handleHover} />
        {this.props.description}
      </Container>
    );
  }
}

export default ProgressItem;
