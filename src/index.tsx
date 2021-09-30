import {CssBaseline, StylesProvider} from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import GlobalStyle from './GlobalStyle';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <CssBaseline />
    <StylesProvider injectFirst>
      <App />
    </StylesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
