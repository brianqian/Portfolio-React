import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './pages/MainPage';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

body{
  background-color: #333;
  margin: 0;
  height: 100vh;
  color: #eaeaea;
  font-family: 'PT Sans Narrow'
}
`;
const MainWithStyle = function() {
  return (
    <div>
      <GlobalStyle />
      <MainPage />
    </div>
  );
};

ReactDOM.render(<MainWithStyle />, document.getElementById('root'));
