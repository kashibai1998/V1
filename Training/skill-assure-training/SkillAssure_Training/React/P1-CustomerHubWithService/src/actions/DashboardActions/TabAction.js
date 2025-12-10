import { ActionTypes } from '../../constants/ActionConstants';

const getTabData = (userId) => {
    return { type: ActionTypes.GET_TAB_DATA_REQ, userId };
}

export default getTabData;
