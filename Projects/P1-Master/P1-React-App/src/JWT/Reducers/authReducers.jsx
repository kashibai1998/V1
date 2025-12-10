import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
} from '../Actions/authActions';

const initialState = {
  auth: localStorage.getItem('auth') || null,
  loading: false,
  error: null,
};

export const authReducers = (state = initialState, action) => {
  if (action.type === LOGIN_REQUEST) {
    return { ...state, loading: true, error: null };
  } else if (action.type === LOGIN_SUCCESS) {
    return { ...state, loading: false, auth: action.payload };
  } else if (action.type === LOGIN_FAILURE) {
    return { ...state, loading: false, auth: action.payload };
  } else if (action.type === LOGOUT) {
    return { ...state, auth: null };
  }
  return state;
};
