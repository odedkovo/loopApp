import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/styles.scss';
import { RootCmp } from './RootCmp.jsx';
// import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/store.js';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <RootCmp />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
