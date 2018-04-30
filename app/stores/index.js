import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { date } from '../reducers';

export const store = createStore(date, applyMiddleware(thunk, logger))
