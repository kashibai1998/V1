import url from '../../constants/urlConstants';
import { put, takeEvery, all, takeLatest } from 'redux-saga/effects';
import deviceData from '../../mock/DashboardTab/Devices.json';
import { ActionTypes } from '../../constants/ActionConstants';

export function* getDevicesData(payload) {
    let customerId = payload.userId.customerId
    let accountId = payload.userId.accountId
    var devicesObject = {}
    const deviceDataFetched = yield fetch(`${url.devices_consumption}${customerId}`).then(response => response.json());
    let highConsumptionForMonth = []
    let mediumConsumptionForMonth = []
    let lowConsumptionForMonth = []

    let highConsumptionNumber = []
    let mediumConsumptionNumber = []
    let lowConsumptionNumber = []

    for (let k = 0; k < deviceData.length; k++) {
        if (customerId == deviceData[k].id) {
            devicesObject.devicesData = deviceData[k]
        }
    }
    console.log(devicesObject)

    function compare(a, b) {
        // Use toUpperCase() to ignore character casing
        const dataA = parseFloat(a.useOfData);
        const dataB = parseFloat(b.useOfData);

        let comparison = 0;
        if (dataA > dataB) {
            comparison = 1;
        } else if (dataA < dataB) {
            comparison = -1;
        }
        return comparison;
    }
    deviceDataFetched.sort(compare);
    let deviceArray = []
    for (let i = 0; i < deviceDataFetched.length; i++) {
        deviceArray.push(deviceDataFetched[i].device.deviceType)
    }
    lowConsumptionForMonth = deviceArray.splice(0, 4)
    mediumConsumptionForMonth = deviceArray.splice(0, 3)
    highConsumptionForMonth = deviceArray
    let deviceNumberArray = []
    for (let i = 0; i < deviceDataFetched.length; i++) {
        deviceNumberArray.push(deviceDataFetched[i].device.noOfDeviceInUse + "/" + deviceDataFetched[i].device.deviceLimit)
    }
    highConsumptionNumber = deviceNumberArray.splice(0, 4)
    mediumConsumptionNumber = deviceNumberArray.splice(0, 3)
    lowConsumptionNumber = deviceNumberArray

    let devicesData = {
        id: 1,
        consumptionData: {
            adds: "Managed home security package available for just £25 per month",
            data: [
                {
                    consumptionDetails: {
                        consumptionLeve1: "High Consumption",
                        consumptionDeviceFirst: highConsumptionForMonth,
                        firstValue: highConsumptionNumber,
                        consumptionLeve2: "Medium Consumption",
                        consumptionDeviceSecond: mediumConsumptionForMonth,
                        secondValue: mediumConsumptionNumber,
                        consumptionLeve3: "Low Consumption",
                        consumptionDeviceThird: lowConsumptionForMonth,
                        thirdValue: lowConsumptionNumber
                    }
                }
            ]
        }
    }

    devicesObject = devicesData

    yield put({
        type: ActionTypes.GET_DEVICE_DATA_RES,
        devicesDashboard: devicesObject,

    });

}

/*
    Not used let use root
*/
export function* watchDemoActions() {
    yield takeEvery(ActionTypes.GET_DEVICE_DATA_REQ, getDevicesData);
}

export default function* root() {
    console.log("usersaga")
    yield all([takeLatest(ActionTypes.GET_DEVICE_DATA_REQ, getDevicesData)]);
}