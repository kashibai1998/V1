import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DataFetching() {

    const [jsonData, setJsonData] = useState([]);

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts`)
            .then(data => {
                console.log(data.data);
                setJsonData(data.data);
            })
            .catch(err => {
                console.log(err);
            })
    },[])

    return (
        <div>
            <h1>Data Fetching from JsonplaceHolder</h1>
            {
                jsonData.map((item) => {
                    return (
                        <div>
                            <li>{item.userId}</li>
                            <li>{item.title}</li>
                        </div>

                    )
                })
            }
        </div>
    )
}

export default DataFetching;
