import { ActionTypes } from '../../constants/ActionConstants';

export const getCustomerProfileData = (userId) => {
    return { type: ActionTypes.GET_CUSTOMER_PROFILE_DATA_REQ, userId };
}
