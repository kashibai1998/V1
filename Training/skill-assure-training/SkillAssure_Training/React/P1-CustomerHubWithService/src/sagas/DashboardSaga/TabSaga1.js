import { put, takeEvery, all, takeLatest, delay } from 'redux-saga/effects';
import { ActionTypes } from '../../constants/ActionConstants';

export function* getTabData(payload) {
    console.log(payload)
    let customerId=payload.userId.customerId
    const connectData = yield fetch(`http://localhost:7214/customerAnalytics/analytics/customer/${customerId}`).then(response => response.json());
    const dataData = yield fetch(`http://localhost:7214/customerAnalytics/analytics/data-analytics/${customerId}`).then(response => response.json());
    const contentData = yield fetch(`http://localhost:7214/customerAnalytics/analytics/content-analytics/${customerId}`).then(response => response.json());
    const premisesData = yield fetch(`http://localhost:7214/customerAnalytics/analytics/premises-analytics/${customerId}`).then(response => response.json());
    const noOfQuiteDaysLastMonth = yield fetch(`http://localhost:7214/customerAnalytics/analytics/content-analytics/lastMonthNotQuiteDays/${customerId}`).then(response => response.json());
    const noOfQuiteDaysLastYear = yield fetch(`http://localhost:7214/customerAnalytics/analytics/content-analytics/lastYearNotQuiteDays/${customerId}`).then(response => response.json());
   
    let tabData = {
        id: 1,
        customerData:{
            graph: [
                {
                    timeline: "CONNECTS",
                    channel: {
                        channelText: "CONNECTS",
                        value: connectData.lastOneMonthConnection,
                        offer: "Number Of Connections made in last 30 days",
                        Data: [
                            {
                                heading: connectData.newConnects,
                                subHeading: "New Connects"
                            },
                            {
                                heading: connectData.activeConnects,
                                subHeading: "Actively Connected"
                            },
                            {
                                heading: connectData.newConnects + connectData.activeConnects,
                                subHeading: "Total Connects"
                            }
                        ]
                    }
                },
                {
                    timeline: "DATA",
                    channel: {
                        channelText: "DATA",
                        value: dataData.avarageTime,
                        time: "Min",
                        offer: "Average viewing time",
                        Data: [
                            {
                                heading: dataData.avarageTimePerDay,
                                subHeading: "Average time of day(8AM to 11 PM) Spent on Work"
                            },
                            {
                                heading: dataData.avarageTimeOnLeisure,
                                subHeading: "Average time Spent on Leisure"
                            }
                        ]
                    }
                },
                {
                    timeline: "CONTENT",
                    channel: {
                        channelText: "CONTENT",
                        adds: "Premire league finals between chelsea and arsenal at 18.00 pm Tonight",
                        value: contentData.sports,
                        offer: "Time Spent on Sports",
                        Data: [
                            {
                                heading: contentData.quiteDays,
                                subHeading: "Quite Day No Content Watched",
                                days: noOfQuiteDaysLastMonth
                            },
                            {
                                heading: contentData.reduceViewingTime,
                                subHeading: "Reduce viewing time"
                            },
                            {
                                heading: contentData.upcomingSports,
                                subHeading: "Sports event Upcoming"
                            }
                        ]
                    }
                },
                {
                    timeline: "PREMISES",
                    channel: {
                        channelText: "PREMISES",
                        value: premisesData.totalDevices,
                        devices: "devices",
                        offer: "Average always Connected",
                        Data: [
                            {
                                heading: premisesData.streamingDevices,
                                subHeading: "Devices are Streaming capable"
                            },
                            {
                                heading: premisesData.newDevices,
                                subHeading: "New Devices Connected"
                            }
                        ]
                    }
                }
            ]
        }

    }
    yield put({
        type: ActionTypes.GET_TAB_DATA_RES,
        TabData: tabData
    });
}


/*
    Not used let use root
*/
export function* watchDemoActions() {
    yield takeEvery(ActionTypes.GET_TAB_DATA_REQ, getTabData);
}

export default function* root() {
    console.log("usersaga")
    yield all([takeLatest(ActionTypes.GET_TAB_DATA_REQ, getTabData)]);
}