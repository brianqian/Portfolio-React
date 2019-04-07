import React, { Component } from 'react';
import styled from 'styled-components';
import PortfolioItem from '../components/PortfolioItem';
import portfolioData from '../data/PortfolioData';

const Page = styled.div`
  max-width: 100vw;
  height: 100vh;
  overflow: auto;
  min-height: 100vh;
  background-color: #1b2a41;
  border-radius: 20px;
`;

const ContentContainer = styled.div`
  margin: 0;
  scroll-snap-type: x mandatory;
  display: flex;
  color: gray;
  width: 100%;
  overflow: auto;
  height: 90%;
`;

const NavBar = styled.div`
  padding: 0 2rem;
  color: white;
  font-family: 'Economica';
`;

const content = portfolioData.map(item => (
  <PortfolioItem title={item.title} stack={item.stack} desc={item.description} />
));

class Portfolio extends Component {
  render() {
    return (
      <Page id="portfolio">
        <NavBar>scroll navbar container</NavBar>
        <ContentContainer itemCount={portfolioData.length}>{content}</ContentContainer>
      </Page>
    );
  }
}

export default Portfolio;
