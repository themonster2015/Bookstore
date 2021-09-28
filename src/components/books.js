import React from 'react';
import { v4 as uuid } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import Book from './book';
import Form from './form';
import { addBook } from '../redux/books/books';

export default function Books() {
  const dispatch = useDispatch();
  const bookList = useSelector((state) => state.books);

  const handleSubmit = (bookDetails) => {
    const newBook = { id: uuid(), ...bookDetails };
    dispatch(addBook(newBook));
  };

  return (
    <div>
      <ul>
        {bookList.length > 0 && bookList.map((book) => (
          <Book
            key={book.id}
            book={book}
          />
        ))}
      </ul>
      <Form handleSubmit={handleSubmit} />
    </div>
  );
}
