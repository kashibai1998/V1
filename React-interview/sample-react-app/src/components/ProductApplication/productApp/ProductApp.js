import ProductForm from "../productForm/ProductForm";
import ProductTable from "../productTable/ProductTable";
import { useState } from "react";
import ProductEdit from "../productEdit/ProductEdit";
import { useSelector, useDispatch } from 'react-redux';


const ProductApp = (props) => {
//   const [products, setProducts] = useState([]);
//   const [renderForm, setRenderForm] = useState("ADD_PRODUCT");
//   const [selected_product, setSelectedProduct] = useState({});
    let products = useSelector((state)=> state.products);
    let renderForm = useSelector((state)=> state.renderForm);
    let selected_product = useSelector((state)=> state.selectedProduct);

if (renderForm === 'ADD_PRODUCT')  {
        return <div>
        <h1><center>Product Application</center></h1>
        <ProductForm/>
        <br></br>
        <ProductTable/>  
        </div>
    }
    else if (renderForm === 'EDIT_PRODUCT')  {
        return <div>
            <ProductEdit product={selected_product} />
        </div>
    }
};

export default ProductApp;
