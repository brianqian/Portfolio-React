import React, { Component } from 'react';
import styled from 'styled-components';
import PortfolioItem from '../components/PortfolioItem';
import portfolioData from '../data/PortfolioData';
import PortfolioNav from '../components/PortfolioNav';

const Page = styled.div`
  max-width: 100%;
  height: 100%;
  grid-row: 2;
  grid-column: 2;
  overflow: auto;
  background-color: #0c1820;
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const ContentContainer = styled.div`
  margin: 0;
  scroll-snap-type: x mandatory;
  display: flex;
  /* color: gray; */
  width: 100%;
  overflow: auto;
  height: 90%;
`;

const NavBar = styled.div``;

const Project = styled.span`
  color: ${props => (props.selected ? 'orange' : 'white')};
`;

const content = portfolioData.map((item, index) => (
  <PortfolioItem
    id={`project-${index}`}
    title={item.title}
    stack={item.stack}
    desc={item.description}
  />
));

class Portfolio extends Component {
  state = {
    selectedProject: 0,
  };

  onScroll = e => {
    e.stopPropagation();
    let element = e.target;
    let ratio = element.scrollWidth / element.scrollLeft;
    let selectedProject = Math.round(portfolioData.length / ratio);
    if (selectedProject !== this.state.selectedProject) this.setState({ selectedProject });
  };

  navBarOnClick = target => {
    const portfolio = document.getElementById('portfolio');
    const { scrollWidth, scrollLeft } = portfolio;
    console.log(target);
  };
  render() {
    const projectTitles = portfolioData.map((item, i) => (
      <Project
        onClick={() => this.navBarOnClick(i)}
        selected={this.state.selectedProject === i ? true : false}
      >
        {item.title}
      </Project>
    ));

    return (
      <Page>
        <PortfolioNav>{projectTitles}</PortfolioNav>
        <ContentContainer id="portfolio" onScroll={this.onScroll}>
          {content}
        </ContentContainer>
      </Page>
    );
  }
}

export default Portfolio;
