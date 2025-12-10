import React, { useEffect, useState } from 'react';
import axios from 'axios';

function FetchingByEnterInValue() {

    const [jsonData, setJsonData] = useState({});
    const [id, setId] = useState(1);
    const [idFromButtonClick, setIdFromButtonClick] = useState(1);

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
            .then(data => {
                console.log(data.data);
                setJsonData(data.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [idFromButtonClick])

    const handleChange = () => {
        setIdFromButtonClick(id);
    }

    return (
        <div>
            <h1>Data Fetching from JsonplaceHolder</h1>
            <input type="text" onChange={e => setId(e.target.value)} />
            <button onClick={handleChange}>Submit</button>
            <h2>
                {
                    jsonData.title
                }
            </h2>
        </div>
    )
}

export default FetchingByEnterInValue;
