import axios from 'axios';
import { REST_API_BASE_URL } from '../utils/constants.js';

let GetProductsAction = () => {
    return async function (dispatch) {
        const res = await axios.get(
            REST_API_BASE_URL + "/product",
            { 
                'Access-Control-Allow-Origin': '*'
            }
          );
          dispatch({type: "GET_PRODUCTS", payload: res.data});
    }
}

export default GetProductsAction;
