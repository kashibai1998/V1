import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  counter: 0,
  show: true,
};
const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    increment(state, action) {
      state.counter = state.counter + action.payload.value;
    },
    decrement(state) {
      state.counter = state.counter - 1;
    },
    toggle(state) {
      state.show = !state.show;
    },
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
});
export const counterActions = counterSlice.actions;
export default store;
