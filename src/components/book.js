import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

export default function Book(props) {
  const dispatch = useDispatch();

  const removeItem = (e) => {
    e.preventDefault();
    dispatch(removeBook(props.book.item_id));
  };
  const { book } = props;
  return (
    <li>
      {book.title}
      {' '}
      -
      {' '}
      {book.category}
      <button type="button" onClick={removeItem} className="btn btn-primary">Remove</button>
    </li>
  );
}
Book.propTypes = {
  book: PropTypes.objectOf(PropTypes.any).isRequired,
};
