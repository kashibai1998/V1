export const ChartReducer = (state = {}, payload) => {
    console.log(payload)
    switch (payload.type) {
        case 'GET_CHART_DATA_RES':
            return Object.assign({}, state, { ChartData: payload.ChartData });
        default:
            return state;
    }
}