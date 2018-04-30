import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { searchReducer } from '../reducers/SearchReducer';

export const store = createStore(searchReducer, applyMiddleware(thunk, logger))
