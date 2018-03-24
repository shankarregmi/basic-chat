import React, { PureComponent } from 'react';

import './chatlist.css';

class ChatList extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            count: 1
        };
    }
    changeRoom = (room) => {
        console.log('room', room);
    }
    render() {
        const username = this.props.user ? this.props.user.username : null;
        const channels = this.props.channels;
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
            </div>
        )
    }
}

export default ChatList;