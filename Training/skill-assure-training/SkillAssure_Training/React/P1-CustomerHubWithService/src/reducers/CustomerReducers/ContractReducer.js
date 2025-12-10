export const ContractReducer = (state = {}, payload) => {
    console.log(payload)
        switch (payload.type) {
            case 'GET_CONTRACT_DATA_RES':
                return Object.assign({}, state, { contractData: payload.contract });
            default:
                return state;
        }
    }
    export default ContractReducer;