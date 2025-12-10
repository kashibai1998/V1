import { ActionTypes } from '../../constants/ActionConstants';

const getPlanData = (userId) => {
    return { type: ActionTypes.GET_PLAN_DATA_REQ, userId };
}

export default getPlanData;
