import { legacy_createStore as createStore } from 'redux';

// const initialState = {
//     // eid:'',
//     // name: '',
//     // age: null,
//     // address: '',
//     // salary:null
// }
// export const userInfoReducer = (state =initialState,action) => {
//     if (action.type === 'Perm_EMP') {
//         return (
//             {
//                 eid: 'P_101010',
//                 name: 'Lucky',
//                 age: 26,
//                 address: 'Banglore',
//                 salary:80000
//             }
//         )
//     }
//      if (action.type === 'Temp_EMP') {
//         return (
//             {
//                 eid: 'T_101010',
//                 name: 'Geeta',
//                 age: 24,
//                 address: 'Bijapur',
//                 salary:70000
//             }
//         )
//      }
//     return state;
// }

// const initialState = {
//     counter:0
// }

const counterReducer = (state = {counter:0}, action) => {
    if (action.type === "increment") {
        return {
            counter: state.counter + 1,
        }
    }
    if (action.type === "decrement") {
        return {
            counter: state.counter - 1,
        }
    }
    console.log(state,"ïn store")
    return state;
};

const store = createStore(counterReducer);

export default store;

