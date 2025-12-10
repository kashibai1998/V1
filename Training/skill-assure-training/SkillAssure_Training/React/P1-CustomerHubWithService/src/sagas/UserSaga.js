// import { put, takeEvery, all } from 'redux-saga/effects';
// import { ActionTypes } from '../actions/constants';


// export function* getUserId(payload) {
//     console.log(payload)
//     yield put({
//         type: ActionTypes.GET_SEARCH_USER_ID_REQ,
//         userId: payload.userId
//     });
// }


// /*
//     Not used let use root
// */
// // export function* watchDemoActions() {
// //     yield takeEvery(ActionTypes.GET_SEARCH_USER_ID_REQ, handleDemoReq);
// // }

// export default function* root() {
//     console.log("usersaga")
//     yield all([takeEvery(ActionTypes.GET_SEARCH_USER_ID, getUserId)]);
// }