import React, { useRef } from 'react';

import classes from './AddMovie.module.css';

function AddMovie(props) {
  const titleRef = useRef('');
  const openingTextRef = useRef('');
  const releaseDateRef = useRef('');

  function submitHandler(event) {
    event.preventDefault();

    // could add validation here...

    const movie = {
      title: titleRef.current.value,
      openingText: openingTextRef.current.value,
      releaseDate: releaseDateRef.current.value,
    };

    props.onAddMovie(movie);
  }

  return (
    <div>
      <h1>Distribution Squad Employee Feedback!</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Name</label>
          <input type='text' id='title' ref={titleRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='opening-text'>Description</label>
          <textarea rows='5' id='opening-text' ref={openingTextRef}></textarea>
        </div>
        <div className={classes.control}>
          <label htmlFor='text'>Rating(10/10)</label>
          <input type='text' id='date' ref={releaseDateRef} />
        </div>
        <button>Submit Feedback</button>
      </form>
    </div>
  );
}

export default AddMovie;
