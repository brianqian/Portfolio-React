import React, { Component } from "react";
import styled from "styled-components";
import PortfolioItem from "../components/PortfolioItem";
import portfolioData from "../data/PortfolioData";
import PortfolioNav from "../components/PortfolioNav";

const Page = styled.div`
  max-width: 100%;
  min-height: 100%;
  grid-row: 2;
  grid-column: 2;
  overflow: auto;
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
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

const ProjectTitle = styled.span`
  color: ${props => (props.selected ? "orange" : "white")};
`;

class Portfolio extends Component {
  state = {
    selectedProject: 0,
    numOfProjects: 0,
    prevWidth: 0,
  };
  componentDidMount = () => {
    this.setState({ numOfProjects: portfolioData.length });
    window.addEventListener("resize", this.onResize);
  };

  componentWillUnmount = () => {
    window.removeEventListener("resize");
  };

  onResize = () => {
    //retains project alignment on resize
    const portfolio = document.getElementById("portfolio");
    const content = document.getElementById("content");
    const { prevWidth, numOfProjects, selectedProject } = this.state;
    const { scrollWidth } = portfolio;
    const NUM_OF_SECTIONS = 3;
    if (scrollWidth < prevWidth + 50 && scrollWidth > prevWidth - 50) return;
    const projectWidth = portfolio.scrollWidth / numOfProjects;
    portfolio.scrollLeft = projectWidth * selectedProject;
    const sectionHeight = content.scrollHeight / NUM_OF_SECTIONS;
    content.scrollTop = sectionHeight * this.props.currentPage;
    this.setState({ prevWidth: portfolio.scrollWidth });
  };

  onScroll = e => {
    //toggles the 'active' nav bar selection based on scroll position
    e.stopPropagation();
    const element = e.target;
    const ratio = element.scrollWidth / element.scrollLeft;
    const selectedProject = Math.round(portfolioData.length / ratio);
    if (selectedProject !== this.state.selectedProject) this.setState({ selectedProject });
  };

  navBarOnClick = targetProject => {
    //smooth scrolls the page on click of project
    const portfolio = document.getElementById("portfolio");
    const { scrollWidth } = portfolio;
    const { selectedProject, numOfProjects } = this.state;
    const distance = (targetProject - selectedProject) * (scrollWidth / numOfProjects);
    portfolio.scrollBy({ left: distance, behavior: "smooth" });
  };
  render() {
    const projectTitles = [];
    const projects = [];

    portfolioData.forEach((item, i) => {
      projectTitles.push(
        <ProjectTitle
          onClick={() => this.navBarOnClick(i)}
          selected={this.state.selectedProject === i ? true : false}
          key={`project-title-${i}`}
        >
          {item.title}
        </ProjectTitle>
      );
      projects.push(<PortfolioItem {...item} key={`project-${i}`} />);
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
