import { ActionTypes } from '../../constants/ActionConstants';

const getDashboardData = (userId) => {
    console.log(userId)
    return { type: ActionTypes.GET_CUSTOMER_DASHBOARD_DATA_REQ, userId };
}

export default getDashboardData;
