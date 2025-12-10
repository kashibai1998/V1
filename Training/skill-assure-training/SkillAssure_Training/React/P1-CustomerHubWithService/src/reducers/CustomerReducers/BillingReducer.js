export const BillingReducer = (state = {}, payload) => {
    console.log(payload)
    switch (payload.type) {
        case 'GET_BILLING_TRANSACTION_DATA_RES':
            return Object.assign({}, state, { BillingData: payload.BillingData });
        default:
            return state;
    }
}
export default BillingReducer;