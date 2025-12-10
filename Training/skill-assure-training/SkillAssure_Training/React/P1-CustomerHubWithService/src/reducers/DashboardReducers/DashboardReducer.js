export const DashboardReducer = (state = {}, payload) => {
    console.log(payload)
    switch (payload.type) {
        case 'GET_CUSTOMER_DASHBOARD_DATA_RES':
            return Object.assign({}, state, { DashboardData: payload.customerDashboard });
        default:
            return state;
    }
}