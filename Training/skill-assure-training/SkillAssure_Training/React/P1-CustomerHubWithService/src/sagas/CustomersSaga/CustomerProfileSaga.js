import { put, takeEvery, all, takeLatest, delay } from 'redux-saga/effects';
import { ActionTypes } from '../../constants/ActionConstants';
import customerData from '../../mock/CustomerTab/Customer.json';
import url from '../../constants/urlConstants';

export function* getCustomerProfile(payload) {
    let accountId = payload.userId.accountId
    console.log(accountId)
    const json = yield fetch(`${url.getCusDetails}${accountId}`)
        .then(response => response.json());
    console.log(json)
    let customer
    for(let i=0;i<customerData.length;i++){
        if(customerData[i].id==accountId){
             customer= {
                customerName:json.firstName+" "+json.lastName,
                image: customerData[i].image,
                customerType: json.customerType,
                color: customerData[i].color,
                memberFrom: customerData[i].memberFrom,
                contactInfo1: json.contactResponse.mobileNbr,
                contactInfo2: json.contactResponse.bussinessTelephoneNbr,
                address: {
                    line1: json.addressResponse[0].addressLine1,
                    line2: json.addressResponse[0].city,
                    line3: json.addressResponse[0].postcode,
                    line4:json.addressResponse[0].country
                },
                contactPreference:json.contactResponse.primaryContactReference
            }
        }
    }

    json.image=customerData[0].image
    yield put({
        type: ActionTypes.GET_CUSTOMER_PROFILE_DATA_RES,
        customer: customer
    });
}


/*
    Not used let use root
*/
export function* watchDemoActions() {
    yield takeEvery(ActionTypes.GET_CUSTOMER_PROFILE_DATA_REQ, getCustomerProfile);
}

export default function* root() {
    console.log("usersaga")
    yield all([takeLatest(ActionTypes.GET_CUSTOMER_PROFILE_DATA_REQ, getCustomerProfile)]);
}
