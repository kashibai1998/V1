import { useRef } from 'react';
import Product from '../models/product';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductForm = (props) => {
    const productNameRef = useRef(null);
    const productQuantityRef = useRef(null);
    const productPriceRef = useRef(null);
    const addProduct = () => { 
        props.addProduct(new Product(productNameRef.current.value, productQuantityRef.current.value, productPriceRef.current.value));
    }
    return <div><h1>Add Product Form</h1><br></br>
    <h4>
        Name: {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}<input type="text" ref={productNameRef}/><br/><br/>
        Quantity: {'\u00A0'}{'\u00A0'}{'\u00A0'}<input type="text" ref={productQuantityRef} /><br/><br/>
        Price: {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}<input type="text" ref={productPriceRef} /><br/><br/><br/>
        {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
        <Button variant="primary" name="add" value="ADD PRODUCT" onClick={addProduct}>ADD PRODUCT</Button>
    </h4>
    </div>
}

export default ProductForm;
