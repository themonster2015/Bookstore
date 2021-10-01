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
      <div className="bookBlock ">
        <div className="bookDetails bg-white ">
          <span className="bookCategory bg-white">{book.category}</span>
          <br />
          <span className="bookTitle bg-white ">{book.title}</span>
          <div className="buttonGroup mt-3">
            <button type="button" className="btn bg-white comment pl-0">Comment</button>
            <button type="button" onClick={removeItem} className="btn bg-white remove">Remove</button>
            <button type="button" className="btn bg-white edit">Edit</button>

          </div>

        </div>
        <div className="progress-wrapper d-flex w-50 justify-content-between bg-white pl-5 pr-5">
          <div className="percentComplete d-flex bg-white">
            <div className="test bg-white">
              <svg className="bg-white">
                <circle cx="20" cy="20" r="20" />
                <circle cx="20" cy="20" r="20" />
              </svg>
            </div>
            <div className="bg-white">
              <span className="d-block mt-3 bg-white h3">75%</span>
              <span className="bg-white text-secondary"> Completed</span>

            </div>

          </div>

          <div className="updateProgress bg-white">
            <div>
              <span className="d-block mt-3 bg-white text-secondary mb-2">CURRENT CHAPTER</span>
              <span className="bg-white d-block mb-2"> Chapter 17</span>

              <button type="button" className="btn btn-primary">UPDATE PROGRESS</button>
            </div>

          </div>
        </div>
      </div>
    </li>
  );
}
Book.propTypes = {
  book: PropTypes.objectOf(PropTypes.any).isRequired,
};
