export const CustomerProfileReducers = (state = {}, payload) => {
console.log(payload)
    switch (payload.type) {
        case 'GET_CUSTOMER_PROFILE_DATA_RES':
            return Object.assign({}, state, { customerProfileData: payload.customer });
        default:
            return state;
    }
}
export default CustomerProfileReducers;