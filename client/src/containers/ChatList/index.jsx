import React, { PureComponent } from 'react';

import './chatlist.css';

class ChatList extends PureComponent {
    constructor() {
        super();
    }
    render() {
        return(
            <div className="list">
                <h1>
                    This is Chat List Section
                </h1>
            </div>
        )
    }
}

export default ChatList;