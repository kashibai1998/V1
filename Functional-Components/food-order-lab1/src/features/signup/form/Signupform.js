/** @format */

import React, { useState } from "react";
import { UserSignup } from "../../../actions/user/user";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const Signupform = (props) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [profile, setProfile] = useState("");

  const HandlesingUp = (e) => {
    e.preventDefault();
    const userDetails = {
      userName: userName,
      userEmail: email,
      userPassword: password,
      userCity: city,
      userCountry: country,
      usergender: gender,
      userage: age,
      userProfilePic: profile,
    };
    props.UserSignup(userDetails);
  };

  // const onChangeFirstname = (name) => {
  //   if (event.target.value.match("^[a-zA-Z ]*$") != null) {
  //     setUserName(event.target.value);
  //   }
  // };

  // const onChangeEmail = (event) => {
  //   this.setState({
  //     email: event.target.value,
  //   });
  // };
  // const onChangePassword = (event) => {
  //   this.setState({
  //     password: event.target.value,
  //   });
  // };
  // const onChangeConfirmpassword = (event) => {
  //   this.setState({
  //     confirmpassword: event.target.value,
  //   });
  // };
  // const onChangeCity = (event) => {
  //   this.setState({
  //     city: event.target.value,
  //   });
  // };
  // const onChangeCountry = (event) => {
  //   this.setState({
  //     country: event.target.value,
  //   });
  // };
  // const onChangeGender = (event) => {
  //   this.setState({
  //     gender: event.target.value,
  //   });
  // };
  // const onChangeAge = (event) => {
  //   this.setState({
  //     age: event.target.value,
  //   });
  // };
  // const onChangeProfile = (event) => {
  //   this.setState({
  //     profile: event.target.value,
  //   });
  // };

  const submit = () => {
    alert("Successfully Submited");
    this.props.history.push("/");
  };
  if ( props.isAuthentication ) {
    return <Redirect to ="/dashboard"/>
  }
    return (
      <div className="container">
        <div className="card">
          <div class="card-header">
            <h3>Signup Form</h3>
          </div>
          <div class="card-body">
            <div className="row">
              <div className="col-sm-2" />
              <div className="col-sm-8">
                <form>
                  <div className="row">
                    <div className="col-sm-6">
                      <label> UserName</label>
                      <input
                        type="text"
                        id="userfirstname"
                        className="form-control"
                        onChange={(e) => {
                          setUserName(e.target.value);
                        }}
                      />
                      <div className="invalid-feedback d-block"></div>
                    </div>
                  </div>
                  <br />

                  <div>
                    <label>User Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="name@example.com"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <br />

                  <div>
                    <label> User Password</label>
                    <input
                      type="password"
                      class="form-control"
                      id="password"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </div>
                  <br />

                  <div>
                    <label> User Confirm Password</label>
                    <input
                      type="password"
                      class="form-control"
                      id="confirmpassword"
                      onChange={(e) => {
                        setCPassword(e.target.value);
                      }}
                    />
                  </div>
                  <br />

                  <div className="row">
                    <div className="col-sm-6">
                      <label> User City</label>
                      <input
                        type="text"
                        class="form-control"
                        id="city"
                        onChange={(e) => {
                          setCity(e.target.value);
                        }}
                      />
                    </div>
                    <div className="col-sm-6">
                      <label> User Country</label>
                      <input
                        type="text"
                        class="form-control"
                        id="country"
                        onChange={(e) => {
                          setCountry(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <br />

                  <div>
                    <label> User Gender</label>
                    <div className="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="gender"
                        value=""
                        onChange={(e) => {
                          setGender(e.target.value);
                        }}
                      />
                      <label class="form-check-label" for="inlineRadio1">
                        Male
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio2"
                        value="option2"
                        onChange={(e) => {
                          setGender(e.target.value);
                        }}
                      />
                      <label class="form-check-label" for="inlineRadio2">
                        Female
                      </label>
                    </div>
                  </div>
                  <br />

                  <div className="row">
                    <div className="col-sm-6">
                      <label> User Age</label>
                      <input
                        type="number"
                        class="form-control"
                        id="age"
                        onChange={(e) => {
                          setAge(e.target.value);
                        }}
                      />
                    </div>
                    <div className="col-sm-6">
                      <label> User Profile Image</label>
                      <input
                        type="file"
                        class="form-control"
                        id="profile"
                        onChange={(e) => {
                          setProfile(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <br />

                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="invalidCheck"
                      required
                    />
                    <label
                      class="form-check-label"
                      for="invalidCheck"
                      style={{ marginLeft: "-70%" }}
                    >
                      Agree to terms and conditions
                    </label>
                  </div>
                  <br />

                  <div>
                    {/* <form onSubmit={this.singUp}> */}
                    <button onClick={HandlesingUp}>Submit</button>
                    {/* </form> */}
                  </div>
                </form>
              </div>
              <div className="col-sm-2" />
            </div>
          </div>
        </div>
      </div>
    );
};
const mapStateToProps = (state) => {

  return {
    isAuthentication: state.user.isAuthentication,
  };
};

export default connect(mapStateToProps, { UserSignup })(Signupform);
