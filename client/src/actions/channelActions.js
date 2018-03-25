import { loadPreviousMessages } from './messageActions';

const loadChannelsSuccess = channels => {
    return { type: 'LOAD_CHANNEL_SUCCESS', channels};
}

export const loadChannels = (socket, userId) => {
    return dispatch => {
        socket.emit('LOAD_MY_CHANNELS', userId, (channels) => {
            if (channels) {
                dispatch(loadChannelsSuccess(channels));
            }
        });
    };
};

const changeChannelSuccess = channel => {
    return { type: 'SET_ACTIVE_CHANNEL', channel};
}

export const changeChannel = (socket, channel) => {
    return dispatch => {
        socket.emit('SET_ACTIVE_CHANNEL', channel, (channelMessages) => {
            if (channelMessages) {
                dispatch(changeChannelSuccess(channel));
                dispatch(loadPreviousMessages(channelMessages));
            }
        });
    };
}