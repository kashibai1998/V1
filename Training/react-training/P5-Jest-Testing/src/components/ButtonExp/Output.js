
const Output = (props) => {
    const data = props.children
    console.log(props, props.data);
    return (
        <p>{data}</p>
    );
}
export default Output;