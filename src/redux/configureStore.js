import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import bookReducer from './books/books';

const reducer = combineReducers(
  {
    books: bookReducer,
  },

);
const store = createStore(
  reducer,
  applyMiddleware(logger),
);

export default store;
