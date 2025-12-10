import { ActionTypes } from '../../constants/ActionConstants';

const getChartData = (userId) => {
    console.log(userId)
    return { type: ActionTypes.GET_CHART_DATA_REQ, userId };
}

export default getChartData;
