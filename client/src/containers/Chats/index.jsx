import React, { PureComponent } from 'react';
import ChatList from '../ChatList';
import ChatDetail from '../ChatDetail';

import './chats.css';

class Chat extends PureComponent {
    constructor() {
        super();
    }
    render() {
        return(
            <div className="main">
                <div className="chat-list">
                    <ChatList/>
                </div>
                <div className="chat-detail">
                    <ChatDetail/>
                </div>
            </div>
        )
    }
}

export default Chat;