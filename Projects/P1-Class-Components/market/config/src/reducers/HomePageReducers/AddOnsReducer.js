import { GET_ADD_ONS_DATA } from '../../constants/actionconstants';

const AddOnsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ADD_ONS_DATA:
      return Object.assign({}, state, { addOnsData: action.data });
    default:
      return state;
  }
}
export default AddOnsReducer;

/// state of data from api will be assigned