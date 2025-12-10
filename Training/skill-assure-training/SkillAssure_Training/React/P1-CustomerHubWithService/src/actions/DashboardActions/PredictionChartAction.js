import { ActionTypes } from '../../constants/ActionConstants';

const getPredictionChartData = (userId) => {
    console.log(userId)
    return { type: ActionTypes.GET_PREDICTION_CHART_DATA_REQ, userId };
}

export default getPredictionChartData;