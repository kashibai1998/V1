import axios from 'axios';
import { REST_API_BASE_URL } from '../utils/constants.js';

const UpdateProductAction = (productObj) => {
    return async function(dispatch) {
        const res = await axios.put(
            REST_API_BASE_URL + "/product/" + productObj.id,
                { 
                    name: productObj.name, 
                    quantity: productObj.quantity,
                    price: productObj.price
                }, 
                { 
                    'Content-type': 'application/json; charset=UTF-8',
                    'Access-Control-Allow-Origin': '*'
                }
            );
          console.log('Update Product serverResponse: ', res.data);
          dispatch({type: "UPDATE_PRODUCT", payload: res.data});

    }
}

export default UpdateProductAction;
