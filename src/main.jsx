import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { MantineProvider, createTheme } from '@mantine/core';
import { App } from './App.jsx';

import '@mantine/core/styles.css';
import './index.css';

const myColor = [
  '#fff9e4e6',
  '#fcf2d0e6',
  '#f7e3a4e6',
  '#f2d473e6',
  '#eec74ae6',
  '#ecbf30e6',
  '#ebbb20e6',
  '#d0a413e6',
  '#b99208e6',
  '#a07d00e6',
];

const theme = createTheme({
  colors: {
    myColor,
  },
  primaryColor: 'myColor',
  fontFamily: 'Lato',
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MantineProvider>
  </React.StrictMode>
);
