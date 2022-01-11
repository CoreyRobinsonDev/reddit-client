import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import { store } from './app/store'
import { Provider } from 'react-redux'

const render = () => {
  ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
}
store.subscribe(render)
