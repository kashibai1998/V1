import { ActionTypes } from '../../constants/ActionConstants';

const getTopConnectData = (userId) => {
    console.log(userId)
    return { type: ActionTypes.GET_TOP_CONNECT_DATA_REQ, userId };
}

export default getTopConnectData;