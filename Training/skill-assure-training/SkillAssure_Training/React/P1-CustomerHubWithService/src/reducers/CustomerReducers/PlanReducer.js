export const PlanReducer = (state = {}, payload) => {
    console.log(payload)
    switch (payload.type) {
        case 'GET_PLAN_DATA_RES':
            return Object.assign({}, state, { planData: payload.planData });
        default:
            return state;
    }
}
export default PlanReducer;