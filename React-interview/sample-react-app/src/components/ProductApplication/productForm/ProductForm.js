import {React, useRef} from 'react';
import AddProductAction from '../../../actions/productapp/AddProductAction'
import { useDispatch, useSelector} from 'react-redux';

const ProductForm = (props) => {
   
    const nameRef = useRef(null);
    const quantityRef = useRef(null);
    const priceRef = useRef(null);

    let disptacher = useDispatch();
    let productList=useSelector((state)=>state.products)
    const addProduct = ()=>{
        let newProduct = { "name": nameRef.current.value, "quantity": quantityRef.current.value,
            "price": priceRef.current.value
        };
        disptacher(AddProductAction(productList,newProduct))
        // props.addProduct(newProduct);
    }

    return <h3>
    Name: {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}<input type="text" ref={nameRef}/><br/><br/>
    Quantity: {'\u00A0'}{'\u00A0'}{'\u00A0'}<input type="text" ref={quantityRef}/><br/><br/>
    Price: {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}<input type="text" ref={priceRef}/><br/><br/><br/>
    {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}<input type="submit" name="addproduct" value="ADD PRODUCT" onClick={addProduct}/>
    </h3>

}

export default ProductForm; 
