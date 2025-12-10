import { useEffect, useState } from "react"

export default function Component() {
    const [api, setAPI] = useState([]);

    const getData = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/posts');
        const res = await data.json();
        setAPI(res);
    }

    useEffect(() => {
        getData();

    }, [])
    return (
        <div>
            Events Data
            {
                api.map((item) => {
                    // console.log('item=>', item);
                    return (
                        <h1>{ item.title }</h1>
                    )
                })
            }
        </div>
    )
}