import { createStore, applyMiddleware, combineReducers } from 'redux';

import { thunk } from 'redux-thunk';
import { authReducers } from '../../Reducers/authReducers';
import { userReducers } from '../../Reducers/userReducer';

const rootReducer = combineReducers({
  auth: authReducers,
  user: userReducers,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
