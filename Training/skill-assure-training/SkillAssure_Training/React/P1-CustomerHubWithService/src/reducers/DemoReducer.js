export const DemoReducer = (state = {}, payload) => {
    console.log('demoreducers');
    console.dir(payload);
    switch (payload.type) {
        case 'DEMO_ACTION_RES':
            return Object.assign({}, state, { demoData: payload.demo });
        default:
            return state;
    }
}

//export default DemoReducer;