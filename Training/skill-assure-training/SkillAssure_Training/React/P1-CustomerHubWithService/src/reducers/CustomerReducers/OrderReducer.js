export const OrderReducer = (state = {}, payload) => {
    console.log(payload)
    switch (payload.type) {
        case 'GET_ORDER_TRANSACTION_DATA_RES':
            return Object.assign({}, state, { OrderData: payload.OrderData });
        default:
            return state;
    }
}
export default OrderReducer;