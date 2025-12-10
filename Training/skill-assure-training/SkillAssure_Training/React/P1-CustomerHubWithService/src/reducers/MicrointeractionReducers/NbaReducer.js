export const NbaReducer = (state = {}, payload) => {
    console.log(payload)
    switch (payload.type) {
        case 'GET_NEXT_BASED_ACTION_RES':
            return Object.assign({}, state, { nextbasedactionData: payload.nextbasedactionData });
        default:
            return state;
    }
}
export default NbaReducer;