import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import appStore from './store';
import App from 'components/app';

const store = appStore();

render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);

