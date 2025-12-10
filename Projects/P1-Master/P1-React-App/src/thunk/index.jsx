import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = { notification: null };
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
  },
});

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
  },
});
export const uiActions = uiSlice.actions;
export default store;
