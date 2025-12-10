export const DevicesReducer = (state = {}, payload) => {
    console.log(payload)
    switch (payload.type) {
        case 'GET_DEVICE_DATA_RES':
            return Object.assign({}, state, { DevicesData: payload.devicesDashboard });
        default:
            return state;
    }
}