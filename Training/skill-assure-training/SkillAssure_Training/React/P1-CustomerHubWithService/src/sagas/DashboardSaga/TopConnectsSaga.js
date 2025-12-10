import { put, takeEvery, all, takeLatest } from 'redux-saga/effects';
import { ActionTypes } from '../../constants/ActionConstants';
import url from '../../constants/urlConstants';

export function* getTopConnectsData(payload){
    let customerId = payload.userId.customerId
    let accountId = payload.userId.accountId
    var topConnectObject = {}
    const topConnectData1 = yield fetch(`${url.connects}${customerId}`).then(response => response.json());


    // top connect
    let toppconnectMonth1 = []
    let toppconnectMonth2 = []
    let toppconnectMonth3 = []
    let toppconnectYear1 = []
    let toppconnectYear2 = []
    let toppconnectYear3 = []
    for (let i = 0; i < topConnectData1.length; i++) {
        var timeDiff = Math.abs((new Date(topConnectData1[i].callStartTime).getTime() - new Date(topConnectData1[i].callEndTime).getTime()) / 3600000);
        if (timeDiff < 2 && timeDiff > 0.5 && new Date(topConnectData1[i].callStartTime) <= new Date("2021-02-30")) {
            toppconnectMonth1.push(topConnectData1[i].callerMobileNo);
        }
        if (timeDiff <= 0.5 && timeDiff > 0.25 && new Date(topConnectData1[i].callStartTime) <= new Date("2021-02-30")) {
            toppconnectMonth2.push(topConnectData1[i].callerMobileNo);
        }
        if (timeDiff <= 0.25 && timeDiff > 0 && new Date(topConnectData1[i].callStartTime) <= new Date("2021-02-30")) {
            toppconnectMonth3.push(topConnectData1[i].callerMobileNo);
        }
        if (timeDiff < 2 && timeDiff > 0.5 && new Date(topConnectData1[i].callStartTime) <= new Date("2021-12-30")) {
            toppconnectYear1.push(topConnectData1[i].callerMobileNo);
        }
        if (timeDiff <= 0.5 && timeDiff > 0.25 && new Date(topConnectData1[i].callStartTime) <= new Date("2021-12-30")) {
            toppconnectYear2.push(topConnectData1[i].callerMobileNo);
        }
        if (timeDiff <= 0.25 && timeDiff > 0 && new Date(topConnectData1[i].callStartTime) <= new Date("2021-12-30")) {
            toppconnectYear3.push(topConnectData1[i].callerMobileNo);
        }
    }
    // console.log(toppconnectMonth1)
    // console.log(toppconnectMonth2)
    // console.log(toppconnectMonth3)

    let toppconnectMonthReduced1 = toppconnectMonth1.filter((item, index) => {
        return index >= 5 && index <= 10
    })
    let toppconnectMonthReduced2 = toppconnectMonth2.filter((item, index) => {
        return index >= 7 && index <= 14
    })
    let toppconnectMonthReduced3 = toppconnectMonth3.filter((item, index) => {
        return index >= 7 && index <= 14
    })
    let toppconnectYearReduced1 = toppconnectYear1.filter((item, index) => {
        return index < 5
    })
    let toppconnectYearReduced2 = toppconnectYear2.filter((item, index) => {
        return index < 7
    })
    let toppconnectYearReduced3 = toppconnectYear3.filter((item, index) => {
        return index < 7
    })


    // same network

    let sameNetworkMonth1 = []
    let sameNetworkMonth2 = []
    let sameNetworkMonth3 = []
    let sameNetworkYear1 = []
    let sameNetworkYear2 = []
    let sameNetworkYear3 = []
    for (let i = 0; i < topConnectData1.length; i++) {
        var timeDiff = Math.abs((new Date(topConnectData1[i].callStartTime).getTime() - new Date(topConnectData1[i].callEndTime).getTime()) / 3600000);
        if (timeDiff < 2 && timeDiff > 0.5 && new Date(topConnectData1[i].callStartTime) <= new Date("2021-02-30") && topConnectData1[i].callerNetworkType == topConnectData1[i].calleeNetworkType) {
            sameNetworkMonth1.push(topConnectData1[i].callerMobileNo);
        }
        if (timeDiff <= 0.5 && timeDiff > 0.25 && new Date(topConnectData1[i].callStartTime) <= new Date("2021-02-30") && topConnectData1[i].callerNetworkType == topConnectData1[i].calleeNetworkType) {
            sameNetworkMonth2.push(topConnectData1[i].callerMobileNo);
        }
        if (timeDiff <= 0.25 && timeDiff > 0 && new Date(topConnectData1[i].callStartTime) <= new Date("2021-02-30") && topConnectData1[i].callerNetworkType == topConnectData1[i].calleeNetworkType) {
            sameNetworkMonth3.push(topConnectData1[i].callerMobileNo);
        }
        if (timeDiff < 2 && timeDiff > 0.5 && new Date(topConnectData1[i].callStartTime) <= new Date("2021-12-30") && topConnectData1[i].callerNetworkType == topConnectData1[i].calleeNetworkType) {
            sameNetworkYear1.push(topConnectData1[i].callerMobileNo);
        }
        if (timeDiff <= 0.5 && timeDiff > 0.25 && new Date(topConnectData1[i].callStartTime) <= new Date("2021-12-30") && topConnectData1[i].callerNetworkType == topConnectData1[i].calleeNetworkType) {
            sameNetworkYear2.push(topConnectData1[i].callerMobileNo);
        }
        if (timeDiff <= 0.25 && timeDiff > 0 && new Date(topConnectData1[i].callStartTime) <= new Date("2021-12-30") && topConnectData1[i].callerNetworkType == topConnectData1[i].calleeNetworkType) {
            sameNetworkYear3.push(topConnectData1[i].callerMobileNo);
        }
    }
    let sameNetworkMonthReduced1 = sameNetworkMonth1.filter((item, index) => {
        return index >= 5 && index <= 10
    })
    let sameNetworkMonthReduced2 = sameNetworkMonth2.filter((item, index) => {
        return index >= 7 && index <= 14
    })
    let sameNetworkMonthReduced3 = sameNetworkMonth3.filter((item, index) => {
        return index >= 5 && index <= 10
    })
    let sameNetworkYearReduced1 = sameNetworkYear1.filter((item, index) => {
        return index < 5
    })
    let sameNetworkYearReduced2 = sameNetworkYear2.filter((item, index) => {
        return index < 7
    })
    let sameNetworkYearReduced3 = sameNetworkYear3.filter((item, index) => {
        return index < 5
    })


    //Other network

    let otherNetworkMonth1 = []
    let otherNetworkMonth2 = []
    let otherNetworkMonth3 = []
    let otherNetworkYear1 = []
    let otherNetworkYear2 = []
    let otherNetworkYear3 = []
    for (let i = 0; i < topConnectData1.length; i++) {
        var timeDiff = Math.abs((new Date(topConnectData1[i].callStartTime).getTime() - new Date(topConnectData1[i].callEndTime).getTime()) / 3600000);
        if (timeDiff < 2 && timeDiff > 0.5 && new Date(topConnectData1[i].callStartTime) <= new Date("2021-02-30") && topConnectData1[i].callerNetworkType != topConnectData1[i].calleeNetworkType) {
            otherNetworkMonth1.push(topConnectData1[i].callerMobileNo);
        }
        if (timeDiff <= 0.5 && timeDiff > 0.25 && new Date(topConnectData1[i].callStartTime) <= new Date("2021-02-30") && topConnectData1[i].callerNetworkType != topConnectData1[i].calleeNetworkType) {
            otherNetworkMonth2.push(topConnectData1[i].callerMobileNo);
        }
        if (timeDiff <= 0.25 && timeDiff > 0 && new Date(topConnectData1[i].callStartTime) <= new Date("2021-02-30") && topConnectData1[i].callerNetworkType != topConnectData1[i].calleeNetworkType) {
            otherNetworkMonth3.push(topConnectData1[i].callerMobileNo);
        }
        if (timeDiff < 2 && timeDiff > 0.5 && new Date(topConnectData1[i].callStartTime) <= new Date("2021-12-30") && topConnectData1[i].callerNetworkType != topConnectData1[i].calleeNetworkType) {
            otherNetworkYear1.push(topConnectData1[i].callerMobileNo);
        }
        if (timeDiff <= 0.5 && timeDiff > 0.25 && new Date(topConnectData1[i].callStartTime) <= new Date("2021-12-30") && topConnectData1[i].callerNetworkType != topConnectData1[i].calleeNetworkType) {
            otherNetworkYear2.push(topConnectData1[i].callerMobileNo);
        }
        if (timeDiff <= 0.25 && timeDiff > 0 && new Date(topConnectData1[i].callStartTime) <= new Date("2021-12-30") && topConnectData1[i].callerNetworkType != topConnectData1[i].calleeNetworkType) {
            otherNetworkYear3.push(topConnectData1[i].callerMobileNo);
        }
    }
    console.log(otherNetworkMonth1)
    let otherNetworkMonthReduced1 = otherNetworkMonth1.filter((item, index) => {
        return index >= 5 && index <= 10
    })
    let otherNetworkMonthReduced2 = otherNetworkMonth2.filter((item, index) => {
        return index >= 7 && index <= 14
    })
    let otherNetworkMonthReduced3 = otherNetworkMonth3.filter((item, index) => {
        return index >= 5 && index <= 10
    })
    let otherNetworkYearReduced1 = otherNetworkYear1.filter((item, index) => {
        return index < 5
    })
    let otherNetworkYearReduced2 = otherNetworkYear2.filter((item, index) => {
        return index < 7
    })
    let otherNetworkYearReduced3 = otherNetworkYear3.filter((item, index) => {
        return index < 5
    })

    let connectsData = {
        // offer: "25% of your connects are using iPhone 11 Pro Max",
        callData: [
            {
                topConnect: {
                    timelineData: [
                        {
                            timeline: "pastmonth",
                            callDetails: {
                                firstCallRange: "2 hrs to 30 mins",
                                firstCallDetails: toppconnectMonthReduced1,
                                firstImage: ["usa.png", "usa.png", "britain.png", "britain.png", "usa.png"],
                                secondCallRange: "30 mins to 15 mins",
                                secondCallDetails: toppconnectMonthReduced2,
                                secondImage: ["singapore.png", "usa.png", "usa.png", "usa.png", "britain.png", "britain.png", "usa.png"],
                                thirdCallRange: "15 mins to 5 mins",
                                thirdCallDetails: toppconnectMonthReduced3,
                                thirdImage: ["usa.png", "usa.png", "singapore.png", "usa.png", "britain.png", "britain.png", "usa.png"]
                            }
                        },
                        {
                            timeline: "pastyear",
                            callDetails: {
                                firstCallRange: "2 hrs to 30 mins",
                                firstCallDetails: toppconnectYearReduced1,
                                firstImage: ["usa.png", "usa.png", "britain.png", "britain.png", "usa.png"],
                                secondCallRange: "30 mins to 15 mins",
                                secondCallDetails: toppconnectYearReduced2,
                                secondImage: ["singapore.png", "usa.png", "usa.png", "usa.png", "britain.png", "britain.png", "usa.png"],
                                thirdCallRange: "15 mins to 5 mins",
                                thirdCallDetails: toppconnectYearReduced3,
                                thirdImage: ["usa.png", "usa.png", "singapore.png", "usa.png", "britain.png", "britain.png", "usa.png"]
                            }
                        }
                    ]
                }
            },
            {
                "sameNetwork": {
                    "timelineData": [
                        {
                            "timeline": "pastmonth",
                            "callDetails": {
                                "firstCallRange": "2 hrs to 30 mins",
                                "firstCallDetails": sameNetworkMonthReduced1,
                                "firstImage": ["usa.png", "usa.png", "usa.png"],
                                "secondCallRange": "30 mins to 15 mins",
                                "secondCallDetails": sameNetworkMonthReduced2,
                                "secondImage": ["usa.png", "usa.png", "britain.png", "usa.png"],
                                "thirdCallRange": "15 mins to 5 mins",
                                "thirdCallDetails": sameNetworkMonthReduced3,
                                "thirdImage": ["usa.png", "usa.png", "usa.png", "britain.png", "usa.png"]
                            }
                        },
                        {
                            "timeline": "pastyear",
                            "callDetails": {
                                "firstCallRange": "2 hrs to 30 mins",
                                "firstCallDetails": sameNetworkYearReduced1,
                                "firstImage": ["usa.png", "usa.png", "usa.png"],
                                "secondCallRange": "30 mins to 15 mins",
                                "secondCallDetails": sameNetworkYearReduced2,
                                "secondImage": ["usa.png", "usa.png", "britain.png", "usa.png"],
                                "thirdCallRange": "15 mins to 5 mins",
                                "thirdCallDetails": sameNetworkYearReduced3,
                                "thirdImage": ["usa.png", "usa.png", "usa.png", "britain.png", "usa.png"]
                            }
                        }
                    ]
                }
            },
            {
                "otherNetwork": {
                    "timelineData": [
                        {
                            "timeline": "pastmonth",
                            "callDetails": {
                                "firstCallRange": "2 hrs to 30 mins",
                                "firstCallDetails": otherNetworkMonthReduced1,
                                "firstImage": ["usa.png", "usa.png"],
                                "secondCallRange": "30 mins to 15 mins",
                                "secondCallDetails": otherNetworkMonthReduced2,
                                "secondImage": ["singapore.png", "usa.png", "usa.png"],
                                "thirdCallRange": "15 mins to 5 mins",
                                "thirdCallDetails": otherNetworkMonthReduced3,
                                "thirdImage": ["usa.png", "usa.png"]
                            }
                        },
                        {
                            "timeline": "pastyear",
                            "callDetails": {
                                "firstCallRange": "2 hrs to 30 mins",
                                "firstCallDetails": otherNetworkYearReduced1,
                                "firstImage": ["usa.png", "usa.png", "britain.png", "britain.png", "usa.png"],
                                "secondCallRange": "30 mins to 15 mins",
                                "secondCallDetails": otherNetworkYearReduced2,
                                "secondImage": ["singapore.png", "usa.png", "usa.png", "usa.png", "britain.png", "britain.png", "usa.png"],
                                "thirdCallRange": "15 mins to 5 mins",
                                "thirdCallDetails": otherNetworkYearReduced3,
                                "thirdImage": ["usa.png", "usa.png", "singapore.png", "usa.png", "britain.png", "britain.png", "usa.png"]
                            }
                        }
                    ]
                }
            }
        ]
    }

    topConnectObject = connectsData

    yield put({
        type: ActionTypes.GET_TOP_CONNECT_DATA_RES,
        topConnectDashboard: topConnectObject,

    });
}

/*
    Not used let use root
*/
export function* watchDemoActions() {
    yield takeEvery(ActionTypes.GET_TOP_CONNECT_DATA_REQ, getTopConnectsData);
}

export default function* root() {
    console.log("usersaga")
    yield all([takeLatest(ActionTypes.GET_TOP_CONNECT_DATA_REQ, getTopConnectsData)]);
}