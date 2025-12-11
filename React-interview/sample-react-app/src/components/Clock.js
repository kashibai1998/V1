import React from 'react';

export class Clock extends React.Component{
    constructor(){
        super();
        this.state={
            currentDate:new Date().toLocaleString(),
            message:''
        };
        this.msgRef=React.createRef();
    }
    componentDidMount(){
        setInterval(()=>
            this.setState({
                currentDate: new Date().toLocaleString()
            }),1000);
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log("Inside the shouldComponentUpdate")
        return true;
    }

    buttonAction=()=>{
        // this.msgRef.current.value="Ok clicked by Ref"
        this.setState({
            message:"Button Clicked",
        })
        this.props.newCountValue(50);
    }

    render(){ 
    return(
        <div>
            <h2>{this.state.currentDate}</h2>
            {this.state.message}<br/><br/>
            <input type="button" name="Ok" value="Ok" onClick={this.buttonAction}/><br/><br/>
            <input type="text" ref={this.msgRef}/>
        </div>
    )
    } 
} 