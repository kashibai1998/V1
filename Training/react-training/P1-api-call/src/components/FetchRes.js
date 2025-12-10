function FetchRes(props) {
    return (
        <div>
            <h1>Reslut:</h1>
            {
                (props.data !== undefined || props.data.length !== 0) &&
                props.data.map((i, key) => {
                    return (
                        <div key={key}>
                            <h3>{i.title}</h3>
                            <h3>{i.desc}</h3>
                            <h3>{i.year}</h3>
                        </div>

                    );
                })
            }
        </div>
    );
}
export default FetchRes;