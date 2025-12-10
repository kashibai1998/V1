import React from "react";

class UseRefClassExample extends React.Component {

    constructor(props) {
        super();
        this.state = {
            timer: 0
        }
    }
    interval;
    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState(prevState => (
                { timer: prevState.timer + 1 }
            )
            )
        }, 100)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    // stopTimer = () => {
    //     clearInterval(this.interval);
    //     console.log("object");
    // }

    render() {
        return (
            <div>
                <h1>Hii This is useRefExample</h1>
                <h2>{this.state.timer}</h2>
                <button onClick={() => clearInterval(this.interval)}>Stop Timer</button>
                {/* <button onClick={this.stopTimer}>Stop Timer</button> */}
            </div>
        )
    }
}
export default UseRefClassExample;