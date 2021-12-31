import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import { store } from './app/store'
import {Provider} from 'react-redux'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
