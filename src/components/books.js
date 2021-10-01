import React, { useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import Book from './book';
import Form from './form';
import { addBook, viewBooks } from '../redux/books/books';

export default function Books() {
  const dispatch = useDispatch();
  const bookList = useSelector((state) => state.books);

  const handleSubmit = (bookDetails) => {
    const newBook = { item_id: uuid(), ...bookDetails };
    dispatch(addBook(newBook));
  };

  useEffect(() => {
    dispatch(viewBooks());
  }, []);

  return (
    <div className="main-content">
      <ul className="allBooks">
        {bookList.length > 0 && bookList.map((data) => (
          <Book
            key={data.item_id}
            book={data}
          />
        ))}

      </ul>
      <h2 className="form-title">ADD NEW BOOK</h2>
      <Form handleSubmit={handleSubmit} />
    </div>
  );
}
