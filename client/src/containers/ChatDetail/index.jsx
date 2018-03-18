import React, { PureComponent } from 'react';

import './chatdetail.css';

import MessageForm from '../../components/MessageForm';

class ChatList extends PureComponent {
    constructor() {
        super();
    }
    render() {
        return(
            <div className="chat-detail-main">
                <div className="footer">
                    <MessageForm />
                </div>
            </div>
        )
    }
}

export default ChatList;