import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import UpdateProductAction from '../actions/update_product';
import { Button } from 'react-bootstrap';

let productIdRef;
let productNameRef;
let productQuantityRef;
let productPriceRef;
let dispatch;

const EditProductForm = (props) => {
    productIdRef = useRef(null);
    productNameRef = useRef(null);
    productQuantityRef = useRef(null);
    productPriceRef = useRef(null);
    dispatch = useDispatch();

    return (
        <div>
            <h1><center>Edit Product</center></h1>
            <h3>
                        ID: {getSpaces(14)}<input type="text" readOnly= {true} ref={productIdRef} value={props.product.id}/><br/><br/>
                        Name: {getSpaces(8)}<input type="text" ref={productNameRef} defaultValue={props.product.name} /><br/><br/>
                        Quantity: {getSpaces(3)}<input type="text" ref={productQuantityRef} defaultValue={props.product.quantity}/><br/><br/>
                        Price: {getSpaces(9)}<input type="text" ref={productPriceRef} defaultValue={props.product.price}/><br/><br/><br/>
                        {getSpaces(15)}
                        <Button variant="primary" name="updateProduct" value="UPDATE" onClick={updateProduct.bind(this, props)}>UPDATE</Button>{'\u00A0'}{'\u00A0'}{'\u00A0'} 
                        <Button variant="primary" name="cancelProduct" value="CANCEL" onClick={props.renderAddProductForm.bind(this)}>CANCEL</Button>
            </h3></div>        
    );
}

function updateProduct(props) {
    props.product.id = productIdRef.current.value;
    props.product.name = productNameRef.current.value;
    props.product.quantity = productQuantityRef.current.value;
    props.product.price = productPriceRef.current.value;
    dispatch(UpdateProductAction(props.product)).then((response) => {
        props.renderAddProductForm();
    })
}
function getSpaces(no) {
    var spaces = '';
    for(var i=0;i<no;i++) {
        spaces += '\u00A0';
    }
    return spaces;
}

export default EditProductForm;
