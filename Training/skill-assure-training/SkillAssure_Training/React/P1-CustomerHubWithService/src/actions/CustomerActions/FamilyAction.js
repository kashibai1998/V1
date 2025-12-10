import { ActionTypes } from '../../constants/ActionConstants';

const getFamilydata = (userId) => {
    return { type: ActionTypes.GET_FAMILY_DATA_REQ, userId };
}

export default getFamilydata;
