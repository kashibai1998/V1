export const USER_REQUEST = 'USER_REQUEST';
export const USER_SUCCESS = 'USER_SUCCESS';
export const USER_FAILURE = 'USER_FAILURE';
export const LOGOUT = 'LOGOUT';

export const fetchUser = () => async (dispatch, getState) => {
  dispatch({ type: USER_REQUEST });
  try {
    const { auth } = getState().auth;
    if (!auth) {
      console.log('not auther');
      return;
    }
    const fetchData = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();
      console.log(data);
      return data;
    };
    try {
      const data = await fetchData();

      dispatch({ type: USER_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: USER_FAILURE, payload: error.message });
    }
  } catch (error) {
    dispatch({ type: USER_FAILURE, payload: error.message });
  }
};
