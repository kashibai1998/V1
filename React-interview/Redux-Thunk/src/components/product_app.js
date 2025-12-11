import React from 'react';
import AddProductAction from '../actions/add_product_action';
import ProductForm from './product_form';
import ProductTable from './product_table';
import GetProductsAction from '../actions/get_products_action';
import EditProductForm from './edit_product';
import DeleteProductAction from '../actions/delete_product';
import { Container, Row }from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class ProductApp extends React.Component {
    constructor(props) {
        super(props);
        this.addProduct = this.addProduct.bind(this);
        this.renderEditProductForm = this.renderEditProductForm.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
        this.renderAddProductForm = this.renderAddProductForm.bind(this);
        this.state = {products: [], renderForm: 'ADD_PRODUCT'};
    }

    componentDidMount() {
        let productsFunc = this.props.store.dispatch(GetProductsAction());
        productsFunc.then((response)=>this.setState({products: this.props.store.getState().products}))
    }

    render() {
        var render_form = this.state.renderForm;

        if (render_form === 'ADD_PRODUCT')  {
            return <div>
                <Container>
                    <Row>
                        <ProductForm addProduct={this.addProduct} />
                    </Row>
                    <Row>
                    <ProductTable products={this.props.store.getState().products} renderEditProductForm={this.renderEditProductForm} deleteProduct={this.deleteProduct}/>
                    </Row>
                </Container>
            </div>
        }
        else if (render_form === 'EDIT_PRODUCT')  {
            return <div>
                <EditProductForm product={this.state.selected_product} renderAddProductForm={this.renderAddProductForm}/>
            </div>        
        }
        else {
            return null;
        }
    }

    addProduct(product) {
        let addProductFunc =  this.props.store.dispatch(AddProductAction(product));
        addProductFunc.then((response)=> {
            this.setState({products: this.props.store.getState().products});
        });
        
    }
    renderEditProductForm(product) {
        this.setState({ selected_product: product, renderForm: 'EDIT_PRODUCT'});
    }
    deleteProduct(index, productId) {
        this.props.store.dispatch(DeleteProductAction(productId))
            .then((response)=> {
                this.state.products.splice(index, 1);
                this.setState({products: this.state.products});        
            })
        this.setState({ renderForm: 'ADD_PRODUCT'});
    }
    renderAddProductForm() {
        this.setState({ renderForm: 'ADD_PRODUCT'});
    }
}
export default ProductApp;