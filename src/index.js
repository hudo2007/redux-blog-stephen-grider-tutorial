import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import promise from 'redux-promise';
import createLogger from 'redux-logger';

import reducers from './reducers';
import routes from './routes';

const logger = createLogger();

// Inserting promise middleware here gives us a lot of magic
// for mapStateToProps and also for translating
// making actioncreator outputs act as a promise without
// having to dig into the payload.
const createStoreWithMiddleware = applyMiddleware(
  promise,
  logger
)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>
  , document.querySelector('.container')
);

