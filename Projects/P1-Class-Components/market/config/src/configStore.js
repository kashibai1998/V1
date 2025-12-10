import { createStore } from 'redux';
import allReducers from './reducers/HomePageReducers/Reducers';

const store = createStore(allReducers);
export default store;