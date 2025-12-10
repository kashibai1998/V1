import { combineReducers } from 'redux'
import AddOnsReducer from './AddOnsReducer'
import ProductReducer from './ProductsReducer'

const allReducers = combineReducers({
    AddOnsReducer,
    ProductReducer
})
export default allReducers;