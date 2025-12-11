const ProductReducer = (state={products: []}, action) => {
    switch(action.type) {
        case 'ADD_PRODUCT':
            state.products.push(action.payload);
            return state;
        case 'ADD_CANDIDATE':
            state.candidates.push(action.payload);
            return state;
        case 'GET_PRODUCTS':
            state.products = action.payload;
            return state;
        case 'GET_PRODUCT_BY_ID':
            state.product = action.payload;
            return state;
        case 'DELETE_PRODUCT_BY_ID':
            state.product = action.payload;
            return state;
        case 'UPDATE_PRODUCT':
            return state;
        default:
            return state;

    }
}

export default ProductReducer;
