import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Form(props) {
  const [state, setState] = useState({ title: '', author: '' });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (state.title.trim().length > 0 && state.author.trim().length > 0) {
      props.handleSubmit(state);
      setState({ title: '', author: '' });
    } else {
      const title = document.getElementsByName('title');
      const author = document.getElementsByName('author');
      if (state.title.trim().length === 0) {
        title[0].style.border = 'red solid 2px';
      }
      if (state.author.trim().length === 0) {
        author[0].style.border = 'red solid 2px';
      }
    }
  };

  return (
    <form onSubmit={submitForm}>
      <input type="text" id="fname" name="title" value={state.title} placeholder="Book Title..." onChange={handleChange} />
      <br />
      <input type="text" id="lname" name="author" value={state.author} placeholder="Book Author..." onChange={handleChange} />
      <br />
      <button type="submit">Submit </button>
    </form>
  );
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
