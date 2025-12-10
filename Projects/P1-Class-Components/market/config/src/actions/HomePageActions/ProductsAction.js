import { GET_PRODUCTS_DATA } from '../../constants/actionconstants';

function productsData() {
    const data = getProductsData();
    
    return { type: GET_PRODUCTS_DATA, data };
}
export default productsData;

function getProductsData() {

  
    fetch("http://localhost:8082/api/v1/catalog/categories?limit=20&offset=0")
        .then(res => res.json())
        .then((result) => {
             console.log(result)
        
        }
        )
    
}