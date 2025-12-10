const INC = 'INC';
const DEC = 'DEC';

let counter = 0;
const reducer = (state = { counter }, action) => {

    switch (action.type) {
        case INC:
            return {
                counter: state.counter + 1,
            }
        case DEC:
            return {
                counter: state.counter - 1,
            }
        default:
            return state
    
            // return {
                // state: state.counter,
            // }
    }
}
export default reducer;