import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { changeChannel } from '../../actions/channelActions';
import ListView from '../../components/ListView';

class ChatList extends PureComponent {
    state = {
        channels: [],
        activeChannel: {}
    }
    
    changeRoom = (channel) => {
        if (channel.name !== this.props.activeChannel.name) {
            this.props.actions.changeChannel(this.props.socket, channel);
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState(nextProps);
        if (nextProps.activeChannel && nextProps.socket) {
            // on initialization subscribe to the active channel
            this.props.actions.changeChannel(nextProps.socket, nextProps.activeChannel);
        }
    }
    render() {
        const username = this.props.me ? this.props.me.username : null;
        const channels = this.props.channels;
        const users = this.props.users;
        return(
            <div className="left-bar">
                <div className="tittle">
                <h4>Welcome, <span>{username} </span></h4>
                </div>
                <ListView array={channels} heading="Channels" name="name" activeChannel={this.state.activeChannel} />
                <ListView array={users} heading="Users" name="username" />
                
            </div>
        )
    }
}

export default connect(null, (dispatch) => {
    return {
    actions: bindActionCreators({
        changeChannel
    }, dispatch),
  };
})(ChatList);