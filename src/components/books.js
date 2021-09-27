import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import Book from './book';
import Form from './form';

export default function Books() {
  let books;
  if (!localStorage.getItem('books')) {
    books = [
      {
        id: 1,
        title: 'Harry Porter',
        author: 'J.K.Rowling',
      },
      {
        id: 2,
        title: 'War and Peace',
        author: 'Leo Tolstoy',
      },

    ];
  } else {
    books = JSON.parse(localStorage.getItem('books'));
  }
  const [bookList, setBookList] = useState(books);

  const handleSubmit = (bookDetails) => {
    const newBook = { id: uuid(), ...bookDetails };
    setBookList([...bookList, newBook]);
  };

  const removeBook = (id) => {
    setBookList([...bookList.filter((book) => (book.id !== id))]);
  };

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(bookList));
  }, [bookList]);

  return (
    <div>
      <ul>
        {bookList.map((book) => (
          <Book
            key={book.id}
            book={book}
            removeBooksProps={removeBook}
          />
        ))}
      </ul>
      <Form handleSubmit={handleSubmit} />
    </div>
  );
}
