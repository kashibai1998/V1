import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = { notification: null, items: [] };
const uiSlice = createSlice({
  name: 'ui',
  initialState: initialState,
  reducers: {
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        message: action.payload.message,
        title: action.payload.title,
      };
    },
    setItems(state, action) {
      state.items = action.payload.items;
    },
  },
});

export const fetchData = () => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: 'pending',
        title: 'Pending',
        message: 'pending...',
      })
    );
    const getData = async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos'
      );
      if (!response.ok) {
        throw new Error('Failed');
      }
      const resData = await response.json();
      return resData;
    };
    try {
      const resData = await getData();
      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success',
          message: 'success...',
        })
      );
      dispatch(
        uiActions.setItems({
          items: resData,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success',
          message: 'success...',
        })
      );
    }
  };
};

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
  },
});
export const uiActions = uiSlice.actions;
export default store;
