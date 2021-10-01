import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function Form(props) {
  const [state, setState] = useState({ title: '', category: '', errors: {} });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  useEffect(() => {

  }, []);

  const submitForm = (e) => {
    e.preventDefault();
    const category = document.getElementsByName('category');

    if (state.title.trim().length > 0 && state.category.trim().length > 0) {
      props.handleSubmit({ title: state.title, category: state.category });
      setState({ ...state, title: '', errors: {} });
    } else {
      if (state.title.trim().length === 0) {
        setState({ ...state, errors: { title: 'You must write a full title' } });
      }
      if (category[0].value === '') { setState({ ...state, errors: { category: 'You must choose one category' } }); }
    }
  };

  return (
    <form onSubmit={submitForm}>
      <div className="form-row w-100">
        <div className="col-7 pr-3">
          <input type="text" id="title" name="title" value={state.title} className="form-control" placeholder="Book Title..." onChange={handleChange} />
          <span style={{ color: 'red' }}>{state.errors.title}</span>

        </div>
        <div className="col pr-3">
          <select name="category" id="category" className="form-control" onChange={handleChange}>
            <option selected value="">Category</option>
            <option value="Action">Action</option>
            <option value="Non-Fiction">Non-Fiction</option>
            <option value="Science Fiction">Science Fiction</option>
            <option value="Drama">Drama</option>
            <option value="Business">Business</option>
            <option value="Psychology">Psychology</option>
          </select>
          <span style={{ color: 'red' }}>{state.errors.category}</span>

        </div>
        <div className="col">
          <button type="submit" className="btn btn-primary w-100">ADD BOOK </button>
        </div>
      </div>
    </form>
  );
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
