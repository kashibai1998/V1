import url from '../../constants/urlConstants';
import { put, takeEvery, all, takeLatest, delay } from 'redux-saga/effects';
import { ActionTypes } from '../../constants/ActionConstants';
import * as moment from 'moment';

export function* getChannelInteractionData(payload) {
    let customerId = payload.userId.customerId
    var channelInteractionObject = {}
const channelInteractionData1 = yield fetch(`${url.InteractionResponse}${customerId}`).then(response => response.json());
    console.log(channelInteractionData1.activityLogResponse)

    let pastWeekSaleData = []
    let pastWeekServiceData = []
    let pastWeekBillsData = []
    let pastWeekData = []
    let pastMonthData = []
    let past3MonthData = []
    let past6MonthData = []

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;

    //var newyyy = today.setMonth(today.getMonth() - 5);
    console.log(today, "todayy");

    var now = moment();
    var startDate = moment().date(1).month(now.month()).year(now.year()).format('YYYY-MM-DD')
    var back7days = moment().subtract(7, 'days').format('YYYY-MM-DD');
    var back30days = moment().subtract(30, 'days').format('YYYY-MM-DD');
    var back90days = moment().subtract(90, 'days').format('YYYY-MM-DD');
    var back180days = moment().subtract(220, 'days').format('YYYY-MM-DD');

    console.log(startDate, "startdate");
    console.log(back7days, "back7days");
    console.log(back30days, "back30days");
    console.log(back90days, "back90days");
    console.log(back180days, "back180days");




    for (let i = 0; i < channelInteractionData1.activityLogResponse.length; i++) {
        if (new Date(channelInteractionData1.activityLogResponse[i].date) <= new Date(startDate) && new Date(channelInteractionData1.activityLogResponse[i].date) >= new Date(back7days)) {
            pastWeekData.push(channelInteractionData1.activityLogResponse[i]);
        }
        if (new Date(channelInteractionData1.activityLogResponse[i].date) <= new Date(startDate) && new Date(channelInteractionData1.activityLogResponse[i].date) >= new Date(back30days)) {
            pastMonthData.push(channelInteractionData1.activityLogResponse[i]);
        }
        if (new Date(channelInteractionData1.activityLogResponse[i].date) <= new Date(startDate) && new Date(channelInteractionData1.activityLogResponse[i].date) >= new Date(back90days)) {
            past3MonthData.push(channelInteractionData1.activityLogResponse[i]);
        }
        if (new Date(channelInteractionData1.activityLogResponse[i].date) <= new Date(startDate) && new Date(channelInteractionData1.activityLogResponse[i].date) >= new Date(back180days)) {
            past6MonthData.push(channelInteractionData1.activityLogResponse[i]);
        }
    }

    for (let i = 0; i < channelInteractionData1.scatterChart.sales.length; i++) {
        pastWeekSaleData.push(channelInteractionData1.scatterChart.sales[i])
    }

    for (let i = 0; i < channelInteractionData1.scatterChart.service.length; i++) {
        pastWeekServiceData.push(channelInteractionData1.scatterChart.service[i])
    }

    for (let i = 0; i < channelInteractionData1.scatterChart.bills.length; i++) {
        pastWeekBillsData.push(channelInteractionData1.scatterChart.bills[i])
    }


    let channelData1 = {
        customerData: {
            // offer: "Handset upgrade-offer iPhone 11 pro max and additional £50 per month on the BlueXL Plan",
            graph: [
                {
                    timeline: "pastWeek",
                    scatteredChart: {
                        sales: pastWeekSaleData,
                        service: pastWeekServiceData,
                        bills: pastWeekBillsData
                    },
                    channelData: pastWeekData
                }
                ,
                {
                    timeline: "pastmonth",
                    scatteredChart: {
                        sales: pastWeekSaleData,
                        service: pastWeekServiceData,
                        bills: pastWeekBillsData
                    },
                    channelData: pastMonthData
                },
                {
                    timeline: "past 3months",
                    scatteredChart: {
                        sales: pastWeekSaleData,
                        service: pastWeekServiceData,
                        bills: pastWeekBillsData
                    },
                    channelData: past3MonthData
                },
                {
                    timeline: "past 6months",
                    scatteredChart: {
                        sales: pastWeekSaleData,
                        service: pastWeekServiceData,
                        bills: pastWeekBillsData
                    },
                    channelData: past6MonthData
                }
            ]
        }
    }

    channelInteractionObject = channelData1

    yield put({
        type: ActionTypes.GET_CHANNEL_INTERACTION_DATA_RES,
        channelInteractionDashboard: channelInteractionObject,

    });
}

/*
    Not used let use root
*/
export function* watchDemoActions() {
    yield takeEvery(ActionTypes.GET_CHANNEL_INTERACTION_DATA_REQ, getChannelInteractionData);
}

export default function* root() {
    console.log("usersaga")
    yield all([takeLatest(ActionTypes.GET_CHANNEL_INTERACTION_DATA_REQ, getChannelInteractionData)]);
}