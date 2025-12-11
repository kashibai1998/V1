import React, { useState } from 'react';
import AddProductAction from '../actions/add_product_action';
import ProductForm from './product_form';
import ProductTable from './product_table';
import GetProductsAction from '../actions/get_products_action';
import EditProductForm from './edit_product';
import DeleteProductAction from '../actions/delete_product';
import { Container, Row }from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

let dispatch;

const ProductAppFunc = (props) => {

    let productList = useSelector(state => state.products);
    dispatch = useDispatch();
    React.useEffect(()=> { ProductList() }, []);
    const ProductList = () => {
        dispatch(GetProductsAction())
    }
    const [products, setProducts] = useState();

    const addProduct = (product) => {
        dispatch(AddProductAction(product)).then((response) => {
            let productListCopy = [...productList];
            setProducts(productListCopy);
            setRenderForm('ADD_PRODUCT');
        });
    }

    let [renderForm, setRenderForm] = useState('ADD_PRODUCT');
    let [selectedProduct, setSelectedProduct] = useState({});
    const renderEditProductForm = (product) => {
        setRenderForm('EDIT_PRODUCT');
        selectedProduct = product;
        setSelectedProduct(product);
    }
    const renderAddProductForm = () => {
        setRenderForm('ADD_PRODUCT');
    }
    const deleteProduct = (index, productId) => {
        dispatch(DeleteProductAction(productId)).then((response) => {
            productList.splice(index, 1);
            let productListCopy = [...productList];
            setProducts(productListCopy);
            setRenderForm('ADD_PRODUCT');
        });
    }
    if (renderForm === 'ADD_PRODUCT')  {
        return (
            <div>
                <Container>
                    <Row>
                        <ProductForm  addProduct={addProduct} />
                    </Row>
                    <Row>
                        <ProductTable products={productList} 
                            renderEditProductForm={renderEditProductForm} 
                            deleteProduct={deleteProduct}/>
                    </Row>
                </Container>
            </div>
        );
    }
    else if(renderForm === 'EDIT_PRODUCT') {
        return <div>
            <EditProductForm product={selectedProduct} renderAddProductForm={renderAddProductForm}/>
        </div>        
    }
    else {
        return null;
    }
}

export default ProductAppFunc;
