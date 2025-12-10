
import { ActionTypes } from '../constants/ActionConstants';


export const getUserIdAction = (userId) => {
    return { type: ActionTypes.GET_SEARCH_USER_ID, userId };
}



