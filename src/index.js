import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ColorModeScript } from '@chakra-ui/react';
import { HashRouter } from 'react-router-dom';

import theme from './theme';

import '@fontsource/inter/400.css'
import '@fontsource/inter/700.css'
import '@fontsource/inter/800.css'
import '@fontsource/raleway/400.css'
import '@fontsource/raleway/700.css'
import '@fontsource/work-sans/400.css'
import '@fontsource/work-sans/700.css'
import '@fontsource/work-sans/800.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
