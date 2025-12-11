import React, { useEffect, useState } from "react";
import axios from "axios";
import UserDetailsTable from "./UserDetailsTable";
// import { Redirect } from "react-router-dom";
const Loginform = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [contactNo, setContactNo] = useState("");

  const HandlesingUp = (e) => {
    e.preventDefault();

    const userDetails = {
      name: name,
      age: age,
      address: address,
      contactNo: contactNo,

    };


    (async () => {
      const rawResponse = await fetch('http://localhost:8080/user/add', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userDetails)
      });
      console.log(rawResponse)
      const content = await rawResponse.json();
      console.log(content);
    })();
    
  };


  return (
    <div className="container">
      <div className="card">
        <div class="card-header">
          <h1>User Management App</h1>
        </div>
        <div class="card-body">
          <div className="row">
            <div className="col-sm-2" />
            <div className="col-sm-8">
              <form>
                <div className="row">
                  <div className="col-sm-6">
                    <label> Name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="city"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </div><br/>
                  <div className="col-sm-6">
                    <label> Address</label>
                    <input
                      type="text"
                      class="form-control"
                      id="city"
                      onChange={(e) => {
                        setAddress(e.target.value);
                      }}
                    />
                  </div><br/>
                </div>

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
                  <br/>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <label> Contact No</label>
                    <input
                      type="number"
                      class="form-control"
                      id="contactNo"
                      onChange={(e) => {
                        setContactNo(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <br />
                <div>
                  <button onClick={HandlesingUp}>Submit</button>
                </div>
              </form>
            </div>
            <div className="col-sm-2" />
          </div>
        </div>
        <br/><br/><br/>
        <div>
          <UserDetailsTable />
        </div>
      </div>
    </div>
  );
};


export default Loginform;
