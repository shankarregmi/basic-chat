const loadChannelsSuccess = channels => {
    return { type: 'LOAD_CHANNEL_SUCCESS', channels};
}

export const loadChannels = (io, userId) => {
    return dispatch => {
        io.emit('LOAD_MY_CHANNELS', userId, (channels) => {
            if (channels) {
                dispatch(loadChannelsSuccess(channels));
            }
        });
    };
};