import { ActionTypes } from '../constants/ActionConstants';

const getTransactionData = (userId) => {
    return { type: ActionTypes.GET_TRANSACTION_DATA_REQ, userId };
}

export default getTransactionData;
