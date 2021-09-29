import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Form(props) {
  const [state, setState] = useState({ title: '', category: '' });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (state.title.trim().length > 0 && state.category.trim().length > 0) {
      props.handleSubmit(state);
      setState({ title: '', category: '' });
    } else {
      const title = document.getElementsByName('title');
      const category = document.getElementsByName('category');
      if (state.title.trim().length === 0) {
        title[0].style.border = 'red solid 2px';
      }
      if (state.category.trim().length === 0) {
        category[0].style.border = 'red solid 2px';
      }
    }
  };

  return (
    <form onSubmit={submitForm}>
      <input type="text" id="title" name="title" value={state.title} placeholder="Book Title..." onChange={handleChange} />
      <br />
      <input type="text" id="category" name="category" value={state.category} placeholder="Book Category..." onChange={handleChange} />
      <br />
      <button type="submit">Submit </button>
    </form>
  );
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
