import React, { PureComponent } from 'react';

import './chatdetail.css';

import MessageForm from '../../components/MessageForm';

class ChatList extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        };
    }
    handleChange = (event) => {
        const message = event.target.value;
        this.setState({
            message
        })
    }
    sendMessage = (e) => {
        if (e.key === 'Enter') {
            console.log(this.state.message);
            this.setState({
                message: ''
            });
          }
    }
    render() {
        return(
            <div className="chat-detail-main">
                <div className="footer">
                    <MessageForm onEnter={this.sendMessage} handleChange={this.handleChange} value={this.state.message} />
                </div>
            </div>
        )
    }
}

export default ChatList;