import React from 'react';
import { render } from 'react-dom';
import styles from './styles/styles.scss';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers/index';
import App from './components/App';

let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// ^ TODO: Remove this after development.
let middleware = applyMiddleware(thunk);

let initialState = {
  searchResults: [{
    title: 'test',
    desc: 'test desc',
    link: 'https://www.google.com',
  }]
};

let store = createStore(rootReducer, initialState, composeEnhancers(middleware));

render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('container'));
