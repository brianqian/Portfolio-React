import React, { Component } from 'react';
import styled from 'styled-components';
import PortfolioItem from '../components/PortfolioItem';
import portfolioData from '../data/PortfolioData';
import PortfolioNav from '../components/PortfolioNav';

const Page = styled.div`
  max-width: 100%;
  min-height: 100%;
  grid-row: 2;
  grid-column: 2;
  overflow: auto;
  background-color: #0c1820;
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  @media (max-width: 780px) {
    grid-column: 1;
  }
`;

const ContentContainer = styled.div`
  margin: 0;
  scroll-snap-type: x mandatory;
  display: flex;
  width: 100%;
  overflow: auto;
  height: 90%;
`;

const Project = styled.span`
  color: ${props => (props.selected ? 'orange' : 'white')};
`;

class Portfolio extends Component {
  state = {
    selectedProject: 0,
    numOfProjects: 0,
    width: 0,
    runCount: 0,
    resizeCount: 0,
  };
  componentDidMount = () => {
    this.setState({ numOfProjects: portfolioData.length });
    window.addEventListener('resize', () => this.onResize(this.adjustAlignment));
  };

  componentWillUnmount = () => {
    window.removeEventListener('resize');
  };
  onResize = () => {
    const portfolio = document.getElementById('portfolio');
    const { width } = this.state;
    const { scrollWidth } = portfolio;

    if (scrollWidth < width + 50 && scrollWidth > width - 50) return;
    window.requestAnimationFrame(this.adjustAlignment);
  };

  adjustAlignment = () => {
    const portfolio = document.getElementById('portfolio');
    const { numOfProjects, selectedProject } = this.state;
    const projectWidth = portfolio.scrollWidth / numOfProjects;
    portfolio.scrollLeft = projectWidth * selectedProject;
    this.setState({ width: portfolio.scrollWidth });
  };

  onScroll = e => {
    e.stopPropagation();
    const element = e.target;
    const ratio = element.scrollWidth / element.scrollLeft;
    const selectedProject = Math.round(portfolioData.length / ratio);
    if (selectedProject !== this.state.selectedProject) this.setState({ selectedProject });
  };

  navBarOnClick = target => {
    const portfolio = document.getElementById('portfolio');
    const { scrollWidth } = portfolio;
    const { selectedProject, numOfProjects } = this.state;
    const distance = (target - selectedProject) * (scrollWidth / numOfProjects);
    portfolio.scrollBy({ left: distance, behavior: 'smooth' });
  };
  render() {
    const projectTitles = [];
    const projects = [];

    portfolioData.forEach((item, i) => {
      projectTitles.push(
        <Project
          onClick={() => this.navBarOnClick(i)}
          selected={this.state.selectedProject === i ? true : false}
        >
          {item.title}
        </Project>
      );
      projects.push(
        <PortfolioItem
          id={`project-${i}`}
          title={item.title}
          stack={item.stack}
          desc={item.description}
          gitURL={item.github}
          deployURL={item.deployment}
        />
      );
    });

    return (
      <Page>
        <PortfolioNav>{projectTitles}</PortfolioNav>
        <ContentContainer id="portfolio" onScroll={this.onScroll}>
          {projects}
        </ContentContainer>
      </Page>
    );
  }
}

export default Portfolio;
