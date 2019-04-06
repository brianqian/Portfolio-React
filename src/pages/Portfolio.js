import React, { Component } from 'react';
import styled from 'styled-components';
import PortfolioItem from '../components/PortfolioItem';
import portfolioData from '../data/PortfolioData';

const Page = styled.div`
  max-width: 100vw;
  height: 100vh;
  overflow: auto;
  min-height: 100vh;
`;

const ContentContainer = styled.div`
  margin: 0;
  scroll-snap-type: x mandatory;
  display: flex;
  background-color: #1b2a41;
  color: gray;
  width: 100%;
  overflow: auto;
  height: 90%;
`;

const content = portfolioData.map(item => (
  <PortfolioItem title={item.title} stack={item.stack} desc={item.description} />
));

class Portfolio extends Component {
  render() {
    return (
      <Page id="portfolio">
        <ContentContainer itemCount={portfolioData.length}>{content}</ContentContainer>
      </Page>
    );
  }
}

export default Portfolio;
