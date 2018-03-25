import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { changeChannel } from '../../actions/channelActions';
import './chatlist.css';

class ChatList extends PureComponent {
    
    changeRoom = (channel) => {
        if (channel.name !== this.props.activeChannel.name) {
            this.props.actions.changeChannel(this.props.socket, channel);
        }
    }
    componentWillReceiveProps(nextProps) {
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
            <div className="list">
                <span className="welcome-text">Welcome</span>
                <span className="user-name">{username}</span>
                <hr/>
                <div className="channels">
                    <h2>Channels <span className="glyphicon glyphicon-plus"></span></h2>
                    {
                        channels.map((channel, id) => {
                            return <h4 key={id} onClick={()=> this.changeRoom(channel)}>&nbsp;#{channel.name}</h4>
                        })
                    }
                </div>
                <hr/>
                <div className="users">
                    <h2>Users</h2>
                    {
                        users.map((user, id) => {
                            return <h4 key={id}>&nbsp;{user.username}</h4>
                        })
                    }
                </div>
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