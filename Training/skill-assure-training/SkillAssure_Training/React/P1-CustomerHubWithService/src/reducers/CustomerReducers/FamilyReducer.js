export const FamilyReducer = (state = {}, payload) => {
    console.log(payload)
    switch (payload.type) {
        case 'GET_FAMILY_DATA_RES':
            return Object.assign({}, state, { familyData: payload.familyData });
        default:
            return state;
    }
}
export default FamilyReducer;