export const ServiceReducer = (state = {}, payload) => {
    console.log(payload)
    switch (payload.type) {
        case 'GET_SERVICE_TRANSACTION_DATA_RES':
            return Object.assign({}, state, { ServiceData: payload.ServiceData });
        default:
            return state;
    }
}
export default ServiceReducer;