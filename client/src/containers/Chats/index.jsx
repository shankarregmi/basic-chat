import React, { PureComponent } from 'react';
import ChatList from '../ChatList';
import ChatDetail from '../ChatDetail';

import { connect } from '../../utils/socket';

import './chats.css';

class Chat extends PureComponent {
    componentDidMount() {
        connect();
    }

    logout = () => {
        window.localStorage.clear();
        this.props.history.push('/login');
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
                <div className="logout-container">
                    <button onClick={this.logout}>
                        <i className="glyphicon glyphicon-off"></i>
                    </button>
                </div>
            </div>
        )
    }
}

export default Chat;