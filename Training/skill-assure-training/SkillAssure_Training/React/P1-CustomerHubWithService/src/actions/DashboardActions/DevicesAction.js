import { ActionTypes } from '../../constants/ActionConstants';

const getDevicesData = (userId) => {
    console.log(userId)
    return { type: ActionTypes.GET_DEVICE_DATA_REQ, userId };
}

export default getDevicesData;