import axios from 'axios';
import { REST_API_BASE_URL } from '../utils/constants.js';

const DeleteProductAction = (productId) => {
    return async function(dispatch) {
        const res = await axios.delete(
            REST_API_BASE_URL + "/product/" + productId, { 
                headers: { 
                    'Content-type': 'application/json; charset=UTF-8',
                    'Access-Control-Allow-Origin': '*'
                }
            });
          console.log('Delete Product serverResponse: ', res.data);
          dispatch({type: "DELETE_PRODUCT_BY_ID", payload: res.data});

    }
}

export default DeleteProductAction;
