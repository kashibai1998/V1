import { put, takeEvery, all, takeLatest, delay } from 'redux-saga/effects';
import { ActionTypes } from '../../constants/ActionConstants';
import planData from '../../mock/CustomerTab/Plan.json';
import url from '../../constants/urlConstants';

export function* getPlanData(payload) {
    let customerId=payload.userId.customerId
    const planData1 = yield fetch(`${url.contract}${customerId}`).then(response => response.json());
    console.log(planData1)
    yield delay(1000)
    yield put({
        type: ActionTypes.GET_PLAN_DATA_RES,
        planData: planData1
    });
}


/*
    Not used let use root
*/
export function* watchDemoActions() {
    yield takeEvery(ActionTypes.GET_PLAN_DATA_REQ, getPlanData);
}

export default function* root() {
    console.log("usersaga")
    yield all([takeLatest(ActionTypes.GET_PLAN_DATA_REQ, getPlanData)]);
}
