import { put, takeEvery, all, takeLatest, delay } from 'redux-saga/effects';
import { ActionTypes } from '../../constants/ActionConstants';
import ServiceData from '../../mock/CustomerTab/ServiceTransaction.json';
import BillingData from '../../mock/CustomerTab/BillingTransaction.json';
import OrderData from '../../mock/CustomerTab/OrderTransaction.json';
import url from '../../constants/urlConstants';

export function* getTransactionData(payload) {
    console.log(payload)
    let accountId = payload.userId.accountId
    let Data = {
        Number: null,
        Date: null,
        info: null,
        status: null,
        closureDate: null
    }
    const serviceJson = yield fetch(`${url.getAllTickets}${accountId}`).then(response => response.json(),);
    console.log(serviceJson)
    let serviceData = []

    for (let k = 0; k < serviceJson.length; k++) {
        Data.Number = serviceJson[k].ticketid;
        Data.Date = serviceJson[k].created_datetime;
        Data.info = serviceJson[k].ticket_type + " " + serviceJson[k].ticket_subtype;
        Data.status = serviceJson[k].ticket_status

        Data.closureDate = serviceJson[k].closed_datetime;
        serviceData[k] = Data;
        Data = {
            Number: null,
            Date: null,
            info: null,
            status: null,
            closureDate: null
        }

    }
    console.log(serviceData)

    const BillingJson = yield fetch(`${url.getAccountBillById}${accountId}`).then(response => response.json(),);

    console.log(BillingJson)


    let billingData = []
    console.log(billingData);
    for (let k = 0; k < BillingJson.length; k++) {
        // if(payload.userId==BillingData[k].id){
        //     billingData=BillingData[k]
        // }
        let newDate = new Date(BillingJson[k].billPrintDate)
        console.log(newDate)
        // var dd = String(today.getDate()).padStart(2, '0');
        // var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        // var yyyy = today.getFullYear();
        // today = yyyy + '-' + mm + '-' + dd;
        let currentDay = String(newDate.getDate()).padStart(2, '0');
        let currentMonth = String(newDate.getMonth() + 1).padStart(2, '0');
        let currentYear = newDate.getFullYear();
        Data.Number = BillingJson[k].billId;
        // Data.Date = BillingJson[k].billPrintDate;
        Data.Date = (currentYear + '-' + currentMonth + '-' + currentDay);
        Data.info = BillingJson[k].billdetailresponseentity.amount
        Data.status = BillingJson[k].paymentStatus
        Data.closureDate = BillingJson[k].billdetailresponseentity.billDispute;
        if (BillingJson[k].billdetailresponseentity.billDispute == false)
            Data.closureDate = "Bill Disputed";
        else
            Data.closureDate = "No Bill Disputs";
        billingData[k] = Data;
        Data = {
            Number: null,
            Date: null,
            info: null,
            status: null,
            closureDate: null
        }
    }

    const OrderJson = yield fetch(`${url.allorders}${accountId}`).then(response => response.json(),);
    console.log(OrderJson)
    let orderData = [];

    function convertDate(time) {
        function pad(s) { return (s < 10) ? '0' + s : s; }
        var d = new Date(time)
        return [d.getFullYear(), pad(d.getMonth() + 1), pad(d.getDate())].join('-')
    }

    for (let k = 0; k < OrderJson.length; k++) {

        Data.Number = "ORD_" + OrderJson[k].orderId;
        Data.Date = OrderJson[k].orderCreatedDate;
        Data.Date = (convertDate(Data.Date))
        Data.info = OrderJson[k].orderDesc
        Data.status = OrderJson[k].orderStatus
        Data.closureDate = OrderJson[k].orderUpdatedDate;
        Data.closureDate = (convertDate(Data.closureDate))
        orderData[k] = Data;
        Data = {
            Number: null,
            Date: null,
            info: null,
            status: null,
            closureDate: null
        }

    }


    yield put({
        type: ActionTypes.GET_SERVICE_TRANSACTION_DATA_RES,
        ServiceData: serviceData
    });

    yield put({
        type: ActionTypes.GET_ORDER_TRANSACTION_DATA_RES,
        OrderData: orderData
    });

    yield put({
        type: ActionTypes.GET_BILLING_TRANSACTION_DATA_RES,
        BillingData: billingData
    });
}


/*
    Not used let use root
*/
export function* watchDemoActions() {
    yield takeEvery(ActionTypes.GET_TRANSACTION_DATA_REQ, getTransactionData);
}

export default function* root() {
    console.log("usersaga")
    yield all([takeLatest(ActionTypes.GET_TRANSACTION_DATA_REQ, getTransactionData)]);
}
