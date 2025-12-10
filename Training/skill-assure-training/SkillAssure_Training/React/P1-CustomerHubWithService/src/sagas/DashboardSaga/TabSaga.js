import { put, takeEvery, all, takeLatest, delay } from 'redux-saga/effects';
import { ActionTypes } from '../../constants/ActionConstants';
import url from '../../constants/urlConstants';

export function* getTabData(payload) {
    console.log(payload)
    let customerId=payload.userId.customerId
    const connectData = yield fetch(`${url.customer}${customerId}`).then(response => response.json());
    const dataData = yield fetch(`${url.data_analytics}${customerId}`).then(response => response.json());
    const contentData = yield fetch(`${url.content_analytics}${customerId}`).then(response => response.json());
    const premisesData = yield fetch(`${url.premises_analytics}${customerId}`).then(response => response.json());
    const noOfQuiteDaysLastMonth = yield fetch(`${url.lastMonthNotQuiteDays}${customerId}`).then(response => response.json());
    const noOfQuiteDaysLastYear = yield fetch(`${url.lastYearNotQuiteDays}${customerId}`).then(response => response.json());

    console.log(noOfQuiteDaysLastYear)
    console.log(noOfQuiteDaysLastMonth)
    console.log(contentData)
    let tabData = {
        id: 1,
        customerData:{
            graph: [
                {
                    timeline: "CONNECTS",
                    channel: {
                        channelText: "CONNECTS",
                        value: connectData.lastOneMonthConnection,
                        offer: "Number Of Connections Made In Last 30 Days",
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
                        offer: "Average Viewing Time",
                        Data: [
                            {
                                heading: dataData.avarageTimePerDay + " GB",
                                subHeading: "  Average time spent on work  (8am – 11pm)"
                            },
                            {
                                heading: dataData.avarageTimeOnLeisure + " GB",
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
                        offer: "Time Spent On Sports",
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
                        offer: "Average Always Connected",
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
