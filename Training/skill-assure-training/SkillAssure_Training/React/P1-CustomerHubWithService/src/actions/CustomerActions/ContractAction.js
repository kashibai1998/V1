import { ActionTypes } from '../../constants/ActionConstants';

 const getContractData = (userId) => {
    return { type: ActionTypes.GET_CONTRACT_DATA_REQ, userId };
}
export default getContractData;