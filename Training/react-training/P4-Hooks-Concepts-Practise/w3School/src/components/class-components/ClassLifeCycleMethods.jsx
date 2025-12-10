import React from "react";

export default class ClassLifeCycleMethod extends React.Component{
    constructor(props) {
        console.log('constructor');
        super(props);
        this.state = {color: "red"};
    }

    // Mounting phase
        // 1. constructor
        // 2. getDerivedStateFromProps
        // 3. componentDidMount()
        // 4. componentWillMount()
    
    // call before render method
    // UNSAFE keyword for after 17th version
    UNSAFE_componentWillMount() {
        console.log('componentWillMount');
    }

    // call after render method
    // componentDidMount() {
    //     console.log('componentDidMount');
    // }

    //update
    //calling the component after changes
    // 1. getDerivedStateFromProps()
    // 2. shouldComponentUpdate()
    // 3. getSnapshotBeforeUpdate()
    // 4. componentDidUpdate()

    changeButton = () => {
        this.setState({
            color: 'green'
        })
    }
    // shouldComponentUpdate()
    shouldComponentUpdate() {
        return true
    }

    // getSnapshotBeforeUpdate() : Basically using for this method is we can get the before updated the data.
    // red
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log(prevState.color);
        const obj = document.getElementById('id1');
        obj.innerHTML = prevState.color;
    }

    // updated state value
    componentDidUpdate() {
        console.log(this.state.color);
    }

    // code for getSnapshotBeforeUpdate()
    componentDidMount() {
        setTimeout( ()=> {
            this.setState({
                color: 'white'
            })
        }, 1000);
    }
        
    // UnMounting
    // componentWillUnmount
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
    
    render() {
        console.log('render method');
        return (
            <div>
                Class Life Cycle methods <br/><br/>
                <button onClick={this.changeButton}>Click Here</button><br /><br />
                <h2>{this.state.color}</h2>
                <h3>Display before updated data</h3>
                <div id="id1"></div>
            </div>
        )
    }
}