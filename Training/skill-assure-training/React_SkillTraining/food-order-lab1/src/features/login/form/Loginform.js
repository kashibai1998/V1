/** @format */

import React, { useState } from "react";
import { connect } from "react-redux";
import { UserLogin } from "../../../actions/user/user";
import { Redirect } from "react-router-dom";

const Loginform = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSignIn = (userName, passWord) => {
    props.UserLogin(userName, passWord);
  };

  const signUp = () => {
    props.history.push("/signup");
  };

  if (props.isAuthentication) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="loginComponent">
      <div className="col-12 mx-auto bg_img">
        <div className="form">
          <div className="row my-3" style={{ margin: "0px" }}>
            <div className="col-lg-4 mx-auto" style={{ top: "25vh" }}>
              <div className="card">
                <div className="card-header">
                  <h1 className="text-center muso">Login Page</h1>
                  <label style={{ color: "black", fontFamily: "bold" }}>
                    UserName
                  </label>
                  <div>
                    <div className="row formInputComponent">
                      <div className="col-lg-12 BasicFrom">
                        <input
                          id="login-userName"
                          onChange={(e) => {
                            setUsername(e.target.value);
                          }}
                          type="text"
                          className="form-control"
                          placeholder="User Name"
                        />
                      </div>
                    </div>
                  </div>
                  <br />
                  <label style={{ color: "black", fontFamily: "bold" }}>
                    Password
                  </label>
                  <div>
                    <div className="row formInputComponent">
                      <div className="col-lg-12 BasicFrom">
                        <input
                          id="login-password"
                          type="password"
                          className="form-control"
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <br />
                  <br />
                  <button
                    type="submit"
                    className="btn btn-outline-success pointer"
                    onClick={() => onSignIn(username, password)}
                  >
                    Sign in
                  </button>

                  <button
                    type="submit"
                    className="btn btn-outline-success1 pointer"
                    onClick={() => signUp()}
                    style={{ marginLeft: "5%" }}
                  >
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
  // }
};
const mapStateToProps = (state) => {
  return {
    isAuthentication: state.user.isAuthentication,
  };
};

export default connect(mapStateToProps, { UserLogin })(Loginform);
