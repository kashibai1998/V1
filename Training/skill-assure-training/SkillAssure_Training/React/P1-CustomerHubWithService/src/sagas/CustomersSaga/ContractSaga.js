// import { put, takeEvery, all, takeLatest,delay } from 'redux-saga/effects';
// import { ActionTypes } from '../../constants/ActionConstants';
// import customerData from '../../mock/CustomerTab/Customer.json'
// import contractData from '../../mock/CustomerTab/Contract.json'

// export function* getContractData(payload) {
//     console.log(payload)
//     console.log(contractData)
//     let contract
//     for(let k=0;k<contractData.length;k++){
//         if(payload.userId==contractData[k].id){
//             contract=contractData[k]
//         }
//     }
//     console.log(contract)
//     yield delay(1000)
//     yield put({
//         type: ActionTypes.GET_CONTRACT_DATA_RES,
//         contract: contract
//     });
// }


// /*
//     Not used let use root
// */
// export function* watchDemoActions() {
//     yield takeEvery(ActionTypes.GET_CONTRACT_DATA_REQ, getContractData);
// }

// export default function* root() {
//     console.log("usersaga")
//     yield all([takeLatest(ActionTypes.GET_CONTRACT_DATA_REQ, getContractData)]);
// }