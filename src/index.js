import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.scss';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';

const appJsx = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.render(appJsx, document.getElementById('root'));
