/** @format */

import axios from "axios";

//2. Get the action types for calls to be made
import {
  SIGNUP_SUCESS,
  SIGNUP_FAIL,
  LOGIN_SUCESS,
  LOGIN_FAIL,
  LOG_OUT,
} from "../actiontypes";
import { useHistory } from "react-router-dom";

//3. Method to get clients from backend
export const UserSignup = (user) => {
  // const history = useHistory();
  const {
    userName,
    userEmail,
    userPassword,
    userCity,
    userCountry,
    usergender,
    userage,
    userProfilePic,
  } = user;

  const userdata = {
    userName: userName,
    userEmail: userEmail,
    userPassword: userPassword,
    isRestaurant: false,
    userGender: usergender,
    userAge: userage,
    userCity: userCity,
    userCountry: userCountry,
    userProfileImageUrl: "https://example.com/photo.jpg",
  };
  console.log("ax", userdata);

  return (dispatch) => {
    const options = {
      //4. Get the URL deoending on the environment
      url: "https://quickfoodbe.learn.skillassure.com/api/v1/auth/register",
      method: "POST",
      data: userdata,
    };
    axios(options)
      .then((response) => {
        var token = response.data.token;
        localStorage.setItem("securityToken", token);
        var serviceURL =
          "https://quickfoodbe.learn.skillassure.com/api/v1/auth/me";
        axios
          .get(serviceURL, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then(
            (res) => {
              dispatch({
                type: SIGNUP_SUCESS,
                payload: res.data.data,
              });
              // history.push("/dashboard");
            },
            (error) => {
              console.log(error);
              var errorMessage = error.message;
            }
          );
      })
      .catch((error) => {
        dispatch({
          type: SIGNUP_FAIL,
        });
      });
  };
};

export const UserLogin = (username, password) => {
  return (dispatch) => {
    const options = {
      //4. Get the URL deoending on the environment
      url: "https://quickfoodbe.learn.skillassure.com/api/v1/auth/login",
      method: "POST",
      data: {
        userEmail: username,
        userPassword: password,
      },
    };
    axios(options)
      .then((response) => {
        var token = response.data.token;
        localStorage.setItem("securityToken", response.data.token);
        var serviceUrl =  "https://quickfoodbe.learn.skillassure.com/api/v1/auth/me";

        axios
          .get(serviceUrl, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then(
            (res) => {
              dispatch({
                type: LOGIN_SUCESS,
                payload: res.data.data,
              });
              // history.push("/dashboard");
            },
            (error) => {
              console.log(error);
              var errorMessage = error.message;
            }
          );
      })
      .catch((error) => {
        dispatch({
          type: LOGIN_FAIL,
        });
      });
  };
};
