import React from "react";

export default class ClassComponentDemo extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964
    };
  }
    changeColor = () => {
        this.setState({
            brand: 'Nexon',
            color: 'white'
        })
  }
  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color}
          {this.state.model}
          from {this.state.year}.
        </p>
        <button
          onClick={this.changeColor}
        >Change color</button>
      </div>
    );
  }
}