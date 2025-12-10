export const ChannelInteractionReducer = (state = {}, payload) => {
    console.log(payload)
    switch (payload.type) {
        case 'GET_CHANNEL_INTERACTION_DATA_RES':
            return Object.assign({}, state, { ChannelInteractionData: payload.channelInteractionDashboard });
        default:
            return state;
    }
}