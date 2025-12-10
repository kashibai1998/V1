export const TabReducer = (state = {}, payload) => {
    console.log(payload)
    switch (payload.type) {
        case 'GET_TAB_DATA_RES':
            return Object.assign({}, state, { TabData: payload.TabData });
        default:
            return state;
    }
}