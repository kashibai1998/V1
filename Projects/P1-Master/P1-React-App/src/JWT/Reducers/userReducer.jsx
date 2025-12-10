import {
  USER_FAILURE,
  USER_REQUEST,
  USER_SUCCESS,
} from '../Actions/userActions';

const initialState = {
  auth: localStorage.getItem('auth') || null,
  loading: false,
  error: null,
};

export const userReducers = (state = initialState, action) => {
  if (action.type === USER_REQUEST) {
    return { ...state, loading: true, error: null };
  } else if (action.type === USER_SUCCESS) {
    return { ...state, loading: false, user: action.payload };
  } else if (action.type === USER_FAILURE) {
    return { ...state, loading: false, error: action.payload };
  }
  return state;
};
