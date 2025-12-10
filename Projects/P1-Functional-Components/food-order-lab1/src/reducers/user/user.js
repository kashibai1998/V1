/** @format */

import {
  SIGNUP_SUCESS,
  SIGNUP_FAIL,
  LOGIN_FAIL,
  LOGIN_SUCESS,
  LOGOUT,
} from "../../actions/actiontypes";

const initialState = {
  user: null,
  loading: true,
  isAuthentication: null,
  token: null,
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_SUCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        isAuthentication: true,
      };
    case SIGNUP_FAIL:
      return {
        ...state,
        loading: false,
        user: null,
        isAuthentication: false,
      };
    case LOGIN_SUCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        isAuthentication: true,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        user: null,
        isAuthentication: false,
      };
    case LOGOUT:
      return {
        ...state,
        loading: false,
        user: null,
        isAuthentication: false,
      };
    default:
      return state;
  }
};

export default userReducer;
