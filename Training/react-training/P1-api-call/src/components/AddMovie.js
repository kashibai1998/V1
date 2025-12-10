import { useCallback, useEffect, useRef, useState } from 'react';

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
    }





    return (
        <div>
            <form onSubmit={submitMovie}>
                <label>Title</label>
                <input type="text" ref={titleRef} /> <br /><br />
                <label>Description</label>
                <input type="text" ref={descRef} /><br /><br />
                <label>Movie Year</label>
                <input type="text" ref={movieYearRef} /><br /><br />
                 <div>
                <button>Add Movie</button>
            </div>
            
            </form>

           

        </div>
    );
}

export default AddMovie;