import React, { Component } from 'react';
import './LoginComponent.scss';
import {
    Link, withRouter
} from "react-router-dom";
import Registration from '../../Component/Registration/Registration';

class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        }
        this.updateUserInput = this.updateUserInput.bind(this);
        this.updatePasswordInput = this.updatePasswordInput.bind(this);
    }
    onSignIn = (userName, passWord) => {
        if ((userName === "edexa" && passWord === "edexa123")) {
            console.log('login sucessfully');
            this.props.history.push('/dashboard')
            // alert("login sucessfully")
        }
        else
            alert("Please Enter Valid Username and Password")
    }
    signUp = () => {
        this.props.history.push('/signUp')
        console.log("hiiii")

    }
    updateUserInput(event) {
        this.setState({ username: event.target.value })
    }
    updatePasswordInput(event) {
        this.setState({ password: event.target.value })
    }
    render() {
        const style1 = {
            height: '100%'
        };
        return (
            <div className="loginComponent">
                <div className="col-12 mx-auto bg_img" >
                    <div className="form">
                        <div className="row my-3" style={{ margin: '0px' }}>
                            <div className="col-lg-4 mx-auto" style={{ top: '25vh' }}>
                                <div className="card">
                                    <div className="card-header">
                                        <h1 className="text-center muso">Login Page</h1>
                                        <label htmlFor="userName" style={{ color: 'black', fontFamily: 'bold' }}>UserName</label>
                                        <div>
                                            <div className="row formInputComponent">
                                                <div className="col-lg-12 BasicFrom">
                                                    <input id="login-userName" onChange={this.updateUserInput} type="text" className="form-control" placeholder="User Name" />
                                                </div>
                                            </div>
                                        </div><br />
                                        <label htmlFor="password" style={{ color: 'black', fontFamily: 'bold' }}>Password</label>
                                        <div>
                                            <div className="row formInputComponent">
                                                <div className="col-lg-12 BasicFrom">
                                                    <input id="login-password" type="password" className="form-control" onChange={this.updatePasswordInput} />
                                                </div>
                                            </div>
                                        </div>
                                        <br /><br />
                                        <button type="submit" className="btn btn-outline-success pointer" onClick={() => this.onSignIn(this.state.username, this.state.password)}>Sign in</button>

                                        <button
                                            type="submit"
                                            className="btn btn-outline-success1 pointer"
                                            // onClick={this.props.showRegistration}
                                            // href="localhost"
                                            onClick={() => this.signUp()}
                                            style={{ marginLeft: '5%' }} >
                                            SignUp
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default withRouter(LoginComponent);