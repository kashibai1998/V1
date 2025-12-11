const Hello = (props) => {

    return (
        <div data-testid="hello">
            <h1>Hello Component by name is {props.firstName}</h1>
        </div>
    )
}
export default Hello;