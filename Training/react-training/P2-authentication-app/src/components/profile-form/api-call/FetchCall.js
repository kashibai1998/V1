import { useCallback, useEffect, useState } from 'react';
import AddMovie from '../AddMovie';
import FetchRes from '../FetchRes';

function FetchCall() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState(null);
    const [err1, setErr1] = useState(null);


    //using async and await method
    const fetchMovie = useCallback(async () => {
        setLoading(true)
        setErr(null)
        try {
            // const response = await fetch('https://swapi.dev/api/people');
            const response = await fetch('https://react-http-a7c4d-default-rtdb.firebaseio.com/movies.json');

            if (!response.ok) {
                throw new Error('Something Went Wrong In API');
            }

            const newData = await response.json();
            console.log(response);

            const finalData = [];
            for (const k in newData) {
                finalData.push({
                    id: k,
                    title: newData[k].title,
                    desc: newData[k].desc,
                    year: newData[k].year
                })
            }

            const res = finalData.map((item) => {
                return {
                    title: item.title,
                    desc: item.desc,
                    year: item.year
                }
            })

            // const res = newData.map((item) => {
            //     return {
            //         name: item.name,
            //         height: item.height,
            //     };
            // });

            setData(res);
            setLoading(false);
        }
        catch (error) {
            console.log(error)
            setErr(error.message);
        }
    },

        []);

    useEffect(() => {
        fetchMovie()
    }, [fetchMovie]);




    //using Promises(then() method)
    // const fetchMovie = () => {
    //     fetch('https://swapi.dev/api/people')
    //         .then(response => {
    //             return response.json();
    //         })
    //         .then(data => {
    //             console.log(data)
    //             const res = data.results.map((item) => {
    //                 return {
    //                     name: item.name,
    //                     height: item.height,
    //                 };
    //             });
    //             setData(res);
    //         });
    // }



    async function subbmitPostData(res1) {
        setLoading(true);
        setErr1(null);
        try {
            const postData = await fetch('https://react-http-a7c4d-default-rtdb.firebaseio.com/movies.json', {
                method: 'POST',
                body: JSON.stringify(res1),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!postData.ok) {
                throw new Error('Post Api not working!!');
            }
            const postDataRes = await postData.json();
            console.log(postDataRes);
        }

        catch (error) {
            console.log(error);
            setErr1(error.message);
        }
    }


    return (
        <div>
            <section>
                <AddMovie onAddMovie={subbmitPostData} />
            </section>

            {/* <section>
                <button onClick={fetchMovie}>Fetch Movie</button>
            </section> */}

            {/* {
                loading &&
                <h1>Loading Data</h1>
            } */}
            {/* {
                !loading &&
                <FetchRes data={data} />
            } */}
            {/* {
                !loading && data.length === 0 &&
                <p>No Found Movies</p>
            } */}
            {
                err
            }
            {
                err1
            }

        </div>
    );
}

export default FetchCall;