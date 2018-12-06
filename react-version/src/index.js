/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import store from './app/store';
import App from './app/containers/App';
import Interceptors from './app/configs/interceptors'
import './app/styles/index.scss'

const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>, document.getElementById('root'))

Interceptors(store)