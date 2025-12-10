export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

export const login = (credentials) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    // const response = await fetch('url', { method: 'post', body: credentials });
    // const { token } = response.data;
    localStorage.setItem('auth', true);
    dispatch({ type: LOGIN_SUCCESS, payload: true });
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, payload: error.message });
  }
};

export const logout = () => {
  localStorage.removeItem('auth');
};
