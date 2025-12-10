import { useCallback, useEffect, useRef, useState } from 'react';
import classes from './AddMovie.module.css'

function AddMovie(props) {

    const titleRef = useRef('');
    const descRef = useRef('');
    const movieYearRef = useRef('');



    const submitMovie = (event) => {
        event.preventDefault();

        const movie = {
            title: titleRef.current.value,
            desc: descRef.current.value,
            year: movieYearRef.current.value,
        };
        props.onAddMovie(movie);

        setTimeout(() => {
            alert('Thank you, Our team will call you soon!!')
        }, 1000);
    }





    return (
        <div style={{margin:'0px 30px 0px 30px'}}>
            <form onSubmit={submitMovie}>
                <div className={classes.control}>
                    <label htmlFor='title'>Name</label>
                    <input type='text' id='title' ref={titleRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='text'>Mobile No</label>
                    <input type='number' ref={movieYearRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='opening-text'>Business Plan</label>
                    <textarea rows='5' id='opening-text' ref={descRef}></textarea>
                </div>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default AddMovie;