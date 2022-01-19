import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';

import rootReducer from './reducers'

export default function newStore() {
  const store = createStore(rootReducer, applyMiddleware(logger));
  return store;
};
