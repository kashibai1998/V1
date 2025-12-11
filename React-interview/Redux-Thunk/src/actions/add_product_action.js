import axios from 'axios';
import { REST_API_BASE_URL } from '../utils/constants.js';

const AddProductAction = (productObj) => {
    return async function(dispatch) {
        const res = await axios.post(
            REST_API_BASE_URL + "/product",
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
          console.log('Add Product serverResponse: ', res.data);
          dispatch({type: "ADD_PRODUCT", payload: res.data});

    }
}

export default AddProductAction;
