import React, { Component } from 'react';
import {
    Link, withRouter
} from "react-router-dom";

class Registration extends Component {
    constructor() {
        super();
        this.state = {

        };
    }


    signUpHnadle=()=>{
        alert("Account is Created")
    }

    render() {


        return (
            <div style={{ marginLeft: '40%', marginTop: '3%' }}>
                <h1>SignUp Page</h1><br /><br />
                <label for="text"><b>UserName</b></label>
                <input type="text" style={{ marginLeft: '6%' }} placeholder="Enter UserName" name="username" required /><br /><br />

                <label for="email" ><b>Email</b></label>
                <input type="text" style={{ marginLeft: '10%' }} placeholder="Enter Email" name="email" required /><br /><br />

                <label for="psw"><b>Password</b></label>
                <input type="password" style={{ marginLeft: '7%' }} placeholder="Enter Password" name="psw" required /><br /><br />

                <label for="psw-repeat"><b>Repeat Password</b></label>
                <input type="password" style={{ marginLeft: '1.5%' }} placeholder="Repeat Password" name="psw-repeat" required /><br /><br />

                <label>
                    <input type="checkbox" checked=" " name="remember" style={{ marginBottom: "15px" }} /> Remember me                <br />

      </label>
                <div class="clearfix">
                    <button type="submit" style={{ marginLeft: '12%' }} onClick={this.signUpHnadle} class="signupbtn">Sign Up</button>
                </div><br />

            </div>
        )
    }
}
export default withRouter(Registration);