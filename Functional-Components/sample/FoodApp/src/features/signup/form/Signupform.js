import React from "react";

class Signupform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userfirstname: "",
      userlastname: "",
      email: "",
      password: "",
      confirmpassword: "",
      city: "",
      country: "",
      gender: "",
      age: "",
      profile: "",
      error: "",
    };
  }

  singUp = (event) => {
    localStorage.setItem("username", this.state.userfirstname);
    localStorage.setItem("password", this.state.password);
    console.log(
      "userfirstname " +
        this.state.userfirstname +
        "\t " +
        "userlastname " +
        this.state.userlastname +
        "\t " +
        "email " +
        this.state.email +
        "\t " +
        "password " +
        this.state.password +
        "\t " +
        "confirmpassword " +
        this.state.confirmpassword +
        "\t " +
        "city " +
        this.state.city +
        "\t " +
        "country " +
        this.state.country +
        "\t " +
        "gender " +
        this.state.gender +
        "\t " +
        "age " +
        this.state.age +
        "\t " +
        "profile " +
        this.state.profile +
        "\t "
    );
    event.preventDefault();
  };

  onChangeFirstname = (event) => {
    if (event.target.value.match("^[a-zA-Z ]*$") != null) {
      this.setState({
        userfirstname: event.target.value,
      });
    }
  };
  onChangeLastname = (event) => {
    if (event.target.value.match("^[a-zA-Z ]*$") != null) {
      this.setState({
        userlastname: event.target.value,
      });
    }
  };
  onChangeEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };
  onChangePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };
  onChangeConfirmpassword = (event) => {
    this.setState({
      confirmpassword: event.target.value,
    });
  };
  onChangeCity = (event) => {
    this.setState({
      city: event.target.value,
    });
  };
  onChangeCountry = (event) => {
    this.setState({
      country: event.target.value,
    });
  };
  onChangeGender = (event) => {
    this.setState({
      gender: event.target.value,
    });
  };
  onChangeAge = (event) => {
    this.setState({
      age: event.target.value,
    });
  };
  onChangeProfile = (event) => {
    this.setState({
      profile: event.target.value,
    });
  };
    
    submit = () => {
        alert("Successfully Submited")
        this.props.history.push('/')
}

  render() {
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
                <form onSubmit={this.singUp}>
                  <div className="row">
                    <div className="col-sm-6">
                      <label> User Firstname</label>
                      <input
                        type="text"
                        id="userfirstname"
                        className="form-control"
                        value={this.state.userfirstname}
                        onChange={this.onChangeFirstname}
                      />
                      <div className="invalid-feedback d-block">
                        {this.state.error}
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <label> User Lasttname</label>
                      <input
                        type="text"
                        id="userlastname"
                        className="form-control"
                        value={this.state.userlastname}
                        onChange={this.onChangeLastname}
                      />
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
                      onChange={this.onChangeEmail}
                    />
                  </div>
                  <br />

                  <div>
                    <label> User Password</label>
                    <input
                      type="password"
                      class="form-control"
                      id="password"
                      onChange={this.onChangePassword}
                    />
                  </div>
                  <br />

                  <div>
                    <label> User Confirm Password</label>
                    <input
                      type="password"
                      class="form-control"
                      id="confirmpassword"
                      onChange={this.onChangeConfirmpassword}
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
                        onChange={this.onChangeCity}
                      />
                    </div>
                    <div className="col-sm-6">
                      <label> User Country</label>
                      <input
                        type="text"
                        class="form-control"
                        id="country"
                        onChange={this.onChangeCountry}
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
                        onChange={this.onChangeGender}
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
                        onChange={this.onChangeGender}
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
                        onChange={this.onChangeAge}
                      />
                    </div>
                    <div className="col-sm-6">
                      <label> User Profile Image</label>
                      <input
                        type="file"
                        class="form-control"
                        id="profile"
                        onChange={this.onChangeProfile}
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
                    <button onClick={this.submit}>Submit</button>
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
  }
}
export default Signupform;
