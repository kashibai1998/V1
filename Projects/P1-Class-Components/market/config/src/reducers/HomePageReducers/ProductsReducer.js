import { GET_PRODUCTS_DATA } from '../../constants/actionconstants';

const ProductReducer = (state = {}, action) => {
    switch (action.type) {
      case GET_PRODUCTS_DATA:
        return Object.assign({}, state, { productData: action.data });
      default:
        return state;
    }
  }
  export default ProductReducer;