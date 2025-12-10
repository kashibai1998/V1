export const TopConnectReducer = (state = {}, payload) => {
    console.log(payload)
    switch (payload.type) {
        case 'GET_TOP_CONNECT_DATA_RES':
            return Object.assign({}, state, { TopConnectData: payload.topConnectDashboard });
        default:
            return state;
    }
}