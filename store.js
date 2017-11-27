import {createStore, applyMiddleware, combineReducers} from 'redux';
import promise from 'redux-promise-middleware';

import * as reducers from './reducers';

const middleware = applyMiddleware(promise());

const store = createStore(
  combineReducers(reducers),
  middleware
);

export default store;
