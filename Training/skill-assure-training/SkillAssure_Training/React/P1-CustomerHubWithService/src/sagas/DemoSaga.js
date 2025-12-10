import { put, takeEvery, all } from 'redux-saga/effects';
import { ActionTypes } from '../constants/ActionConstants';


export function* handleDemoReq({ payload }) {
    console.log('handleDemoReq');
    console.dir(payload);
    yield put({
        type: ActionTypes.DEMO_ACTION_RES,
        demo: { 'name': 'demo' + payload.name }
    });
}

/*
    Not used let use root
*/
export function* watchDemoActions() {
    yield takeEvery(ActionTypes.DEMO_ACTION_REQ, handleDemoReq);
}

export default function* root() {
    yield all([takeEvery(ActionTypes.DEMO_ACTION_REQ, handleDemoReq)]);
}