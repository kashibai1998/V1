import { useEffect, useState } from "react"

const Async = (async) => {
    const [apiData, setApiData] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                setApiData(data);
                console.log(data);
            })

    }, []);
    return (
        <div>
            <h2>Async data</h2>
            <ul>
                {
                    apiData.map((item) => {
                        return (
                            <li key={item.id}>{item.title}</li>
                        )
                    })
                }
            </ul>

        </div>
    );

}
export default Async