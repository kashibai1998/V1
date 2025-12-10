import { ActionTypes } from '../../constants/ActionConstants';

const getChannelInteractionData = (userId) => {
    console.log(userId)
    return { type: ActionTypes.GET_CHANNEL_INTERACTION_DATA_REQ, userId };
}

export default getChannelInteractionData;