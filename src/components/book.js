import React from 'react';
import PropTypes from 'prop-types';

export default function Book(props) {
  const handleClick = (e) => {
    e.preventDefault();
    props.removeBooksProps(props.book.id);
  };
  const { book } = props;
  return (
    <li>
      {book.title}
      {' '}
      -
      {' '}
      {book.author}
      <button type="button" onClick={handleClick}>Remove</button>
    </li>
  );
}
Book.propTypes = {
  book: PropTypes.objectOf(PropTypes.any).isRequired,
  removeBooksProps: PropTypes.func.isRequired,
};
