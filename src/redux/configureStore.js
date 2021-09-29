import {
  createStore, applyMiddleware, combineReducers,
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import bookReducer from './books/books';

const reducer = combineReducers(
  {
    books: bookReducer,
  },

);

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);

export default store;
