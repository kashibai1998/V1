import { configureStore } from '@reduxjs/toolkit';
import cartToggle from './reducer/cartToggle';
import cartItem from './reducer/cartItem';


const store = configureStore({
    reducer: {
        cartToggle: cartToggle.reducer,
        cartItem:cartItem.reducer
    }
})

export default store;

