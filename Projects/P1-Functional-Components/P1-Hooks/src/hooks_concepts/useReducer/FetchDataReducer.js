import React, { useReducer, useEffect, useState } from "react";
import axios from "axios";

let initialState = {
    post: {},
    error: '',
    loading: true
}

const reducer = (state, action) => {
    switch (action.type) {
        case "ACTION_SUCCESS":
            return ({
                loading: false,
                post: action.payload,
                error: ''
            })
        case "ACTION_FAILED":
            return ({
                loading: false,
                post: {},
                error: 'Something Went wrong'
            })
        default:
            return state;
    }
}

function FetchDataReducer() {

    // const [post, setPost] = useState({});
    // const [isError, setIsError] = useState('');
    // const [isLoading, setIsLoading] = useState(true);

    const [state, disptach] = useReducer(reducer, initialState);

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/12`)
            .then(data => {
                disptach({ type: 'ACTION_SUCCESS', payload: data.data })
            })
            .catch(isError => {
                disptach({ type: 'ACTION_FAILED' })
            })

    }, [])


    return (
        <div>
            <h4>Fetch Axios Data through the Reducer</h4>
            <div>
                <h2>
                    {state.loading ? 'Loading' : state.post.title}
                    {state.error ? state.error : null}
                </h2>
            </div>
        </div>
    )
}
export default FetchDataReducer;