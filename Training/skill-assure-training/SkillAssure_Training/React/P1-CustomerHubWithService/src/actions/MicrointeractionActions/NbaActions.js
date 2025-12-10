import { ActionTypes } from '../../constants/ActionConstants';

const getNbaData = (obj) => {
    console.log(obj)
    return {
        
        type: ActionTypes.GET_NEXT_BASED_ACTION_REQ,obj
    };
}

export default getNbaData;
