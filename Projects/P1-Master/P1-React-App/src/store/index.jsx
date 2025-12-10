import { createStore } from 'redux';

const initialState = {
  counter: 0,
  show: true,
};
const counterReducer = (state = initialState, action) => {
  if (action.type === 'inc') {
    return {
      ...state,
      counter: state.counter + action.payload.value,
    };
  }
  if (action.type === 'dec') {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }
  if (action.type === 'toggle') {
    return {
      ...state,
      show: !state.show,
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
