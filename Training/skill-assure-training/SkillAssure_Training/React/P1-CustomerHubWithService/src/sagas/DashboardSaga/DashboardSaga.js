import { put, takeEvery, all, takeLatest } from 'redux-saga/effects';
import { ActionTypes } from '../../constants/ActionConstants';
import dynamicData from '../../mock/DashboardTab/CustomerDynamic.json'
import predictionData from '../../mock/DashboardTab/PredictionChart.json'
import channelData from '../../mock/DashboardTab/ChannelChart.json'
import topConnect from '../../mock/DashboardTab/TopConnect.json'
import deviceData from '../../mock/DashboardTab/Devices.json'
import url from '../../constants/urlConstants';
import * as moment from 'moment';

export function* getCustomerDashboardData(payload) {
    let customerId = payload.userId.customerId
    let accountId = payload.userId.accountId
    var dashboardObject = {}

    const customerDynamicData = yield fetch(`${url.user}${accountId}`).then(response => response.json());
    console.log(customerDynamicData)

    dashboardObject = customerDynamicData

    // for (let k = 0; k < predictionData.length; k++) {
    //     if (customerId == predictionData[k].id) {
    //         dashboardObject.predictionData = predictionData[k]
    //     }
    // }

    // for (let k = 0; k < channelData.length; k++) {
    //     if (customerId == channelData[k].id) {
    //         dashboardObject.channelInteractionData = channelData[k]
    //     }
    // }





    // top connects


    yield put({
        type: ActionTypes.GET_CUSTOMER_DASHBOARD_DATA_RES,
        customerDashboard: dashboardObject,

    });
}





/*
    Not used let use root
*/
export function* watchDemoActions() {
    yield takeEvery(ActionTypes.GET_CUSTOMER_DASHBOARD_DATA_REQ, getCustomerDashboardData);
}

export default function* root() {
    console.log("usersaga")
    yield all([takeLatest(ActionTypes.GET_CUSTOMER_DASHBOARD_DATA_REQ, getCustomerDashboardData)]);
}