import { createSlice } from '@reduxjs/toolkit';

const allState = {
    toggle:false
}
const cartToggle = createSlice({
    name: 'cart_toggle',
    initialState: allState,
    reducers: {
        cartToggle(state) {
            state.toggle = !state.toggle
        }
    }
});

export const cartToggleActions = cartToggle.actions;

export default cartToggle;