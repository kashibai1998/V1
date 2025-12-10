import { all, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { ActionTypes } from '../../constants/ActionConstants';
import url from '../../constants/urlConstants';
       
export function* getNbaData(payload) {
    console.log(payload)
    let customerId=payload.obj.customerId
    let day=payload.obj.day

    const NbaDataJson = yield fetch(`${url.NextBasedActionResponse}${customerId}/${day}`).then(response => response.json(),);
    console.log(NbaDataJson)
    // let Data = {
    //   nba:NbaDataJson,
    // //   recommendationchannel:NbaDataJson
    // }


    yield put({
        type: ActionTypes.GET_NEXT_BASED_ACTION_RES,
        nextbasedactionData: NbaDataJson
    });
}


/*
    Not used let use root
*/
export function* watchDemoActions() {
    yield takeEvery(ActionTypes.GET_NEXT_BASED_ACTION_REQ, getNbaData);
}

export default function* root() {
    console.log("nbasaga")
    yield all([takeLatest(ActionTypes.GET_NEXT_BASED_ACTION_REQ, getNbaData)]);
}












//   let nba1 = [];
//     for (let k = 0; k < NbaDataJson.length; k++) {
//         Data.nba = NbaDataJson[k].nba
//         Data.recommendationchannel = NbaDataJson[k].recommendationchannel
//         nba1[k] = Data;
//         Data = {
//             nba: null,
//             recommendationchannel: null,
//         }
//     }