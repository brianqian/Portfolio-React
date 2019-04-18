import React, { Component } from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import AboutMe from "../pages/AboutMe";
import Portfolio from "../pages/Portfolio";
import NavBar from "../components/NavBar";
import ProgressPage from "./ProgressPage";
import theme from "../data/cssTheme";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Economica|Markazi+Text');
body, html{
  margin: 0;
  font-size: 100%;
}
::-webkit-scrollbar {
    width: 0px;
    background: transparent;  
}
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  min-height: 100vh;
`;

const BackgroundImage = styled.div`
  background-color: ${props => props.theme.bg};
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='152' height='152' viewBox='0 0 152 152'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='temple' fill='%23648ca7' fill-opacity='0.13'%3E%3Cpath d='M152 150v2H0v-2h28v-8H8v-20H0v-2h8V80h42v20h20v42H30v8h90v-8H80v-42h20V80h42v40h8V30h-8v40h-42V50H80V8h40V0h2v8h20v20h8V0h2v150zm-2 0v-28h-8v20h-20v8h28zM82 30v18h18V30H82zm20 18h20v20h18V30h-20V10H82v18h20v20zm0 2v18h18V50h-18zm20-22h18V10h-18v18zm-54 92v-18H50v18h18zm-20-18H28V82H10v38h20v20h38v-18H48v-20zm0-2V82H30v18h18zm-20 22H10v18h18v-18zm54 0v18h38v-20h20V82h-18v20h-20v20H82zm18-20H82v18h18v-18zm2-2h18V82h-18v18zm20 40v-18h18v18h-18zM30 0h-2v8H8v20H0v2h8v40h42V50h20V8H30V0zm20 48h18V30H50v18zm18-20H48v20H28v20H10V30h20V10h38v18zM30 50h18v18H30V50zm-2-40H10v18h18V10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  background-repeat: repeat;
  z-index: -1;
  position: absolute;
  left: 0;
  top: 0;
  min-height: 100vh;
  min-width: 100vw;
`;

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 5% 90% 5%;
  grid-template-rows: 100%;
  background-color: ${props => props.theme.fg};
  font-family: "Cutive Mono";
  font-size: ${props => props.theme.pSize};
  text-align: center;
  align-self: center;
  justify-self: center;
  max-height: 95vh;
  width: 95vw;
  margin: auto;
  border-radius: 20px;
  border: 5px solid ${props => props.theme.text};
  box-sizing: border-box;
  @media (max-width: 780px) {
    grid-template-columns: 92% 8%;
    min-width: 100vw;
    min-height: 100vh;
    border: none;
  }
`;

const Content = styled.div`
  min-height: 100%;
  overflow: auto;
  scroll-snap-type: y mandatory;
  grid-column: 2;
  padding: 0 1rem;
  @media (max-width: 780px) {
    grid-column: 1;
  }
`;

class MainPage extends Component {
  state = {
    selectedSection: 0,
    scrollTop: 0,
    numOfSections: 3,
  };

  selectActiveOnScroll = e => {
    const { scrollHeight, scrollTop } = e.currentTarget;
    const ratio = scrollHeight / scrollTop;
    const selectedSection = Math.round(this.state.numOfSections / ratio);
    if (selectedSection !== this.state.selectedSection)
      this.setState({ selectedSection, scrollTop });
  };

  navBarOnClick = pageIndex => {
    const { selectedSection, numOfSections } = this.state;
    const content = document.getElementById("content");
    const distance = (pageIndex - selectedSection) * (content.scrollHeight / numOfSections);
    content.scrollBy({ top: distance, behavior: "smooth" });
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <BackgroundImage />
          <GlobalStyle />
          <ContentContainer>
            <NavBar scrollFn={this.navBarOnClick} selected={this.state.selectedSection} />
            <Content id="content" onScroll={this.selectActiveOnScroll}>
              <AboutMe />
              <Portfolio currentPage={this.state.selectedSection} />
              <ProgressPage />
            </Content>
          </ContentContainer>
        </Container>
      </ThemeProvider>
    );
  }
}

export default MainPage;
