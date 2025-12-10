import { ActionTypes } from '../constants/ActionConstants';
export const userIdReducer = (state = {}, payload) => {
    console.log('user id reducer');
    console.dir(payload);
    switch (payload.type) {
        case ActionTypes.GET_SEARCH_USER_ID:
            return Object.assign({}, state, {ids:payload.userId});
        default:
            return state;
    }
}
