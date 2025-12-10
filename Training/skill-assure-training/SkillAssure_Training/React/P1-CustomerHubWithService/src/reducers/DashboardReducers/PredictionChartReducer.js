export const PredictionChartReducer = (state = {}, payload) => {
    console.log(payload)
    switch (payload.type) {
        case 'GET_PREDICTION_CHART_DATA_RES':
            return Object.assign({}, state, { PredictionChartData: payload.predictionChartDashboard });
        default:
            return state;
    }
}