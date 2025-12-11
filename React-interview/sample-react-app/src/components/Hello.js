import React from 'react';
import propTypes from 'prop-types';
import { Clock } from './Clock';

export class Hello extends React.Component{
    constructor(){
        super();
        this.state={
            count:5
        };
    }
    callBack =(newCount)=>{
        this.setState({
            count:newCount
        })
    }
    render(){ 
    return(
        <div>
            <h1>Welcome to React {this.props.firstName}</h1>
            <h2>count:{this.state.count}</h2>
            <Clock newCountValue={this.callBack}/>
        </div>
    )
    } 
} 
Hello.defaultProps={firstName:'Tom'};
Hello.propTypes={
    "firstName":function(props,propName,componentName){
        if(props[propName].length>5){
            return Error('firstname should greater than 5 char')
        }
    }
} 