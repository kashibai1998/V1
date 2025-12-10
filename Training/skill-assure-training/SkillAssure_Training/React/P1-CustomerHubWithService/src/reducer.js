import { combineReducers } from "redux";
import DemoReducer from './reducers/DemoReducer';
import userIdReducer from './reducers/UserIdReducer';
import CustomerProfileReducers from './reducers/CustomerProfileReducers'


const allReducers = combineReducers({
    DemoReducer,
    userIdReducer,
    CustomerProfileReducers

});
export default allReducers;
