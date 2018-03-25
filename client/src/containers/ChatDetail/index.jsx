import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { sendMessage } from '../../actions/messageActions';

import MessageForm from '../../components/MessageForm';
import MessagePreview from '../../components/MessagePreview';

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
    sendMessage = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            if (this.state.message.trim().length) {
                const data = {
                    body: this.state.message,
                    author: this.props.me._id,
                    channel: this.props.activeChannel._id
                };
                this.props.actions.sendMessage(this.props.socket, data);
                this.setState({
                    message: ''
                });
            }
          }
    }
    render() {
        return(
            <div className="right-bar">
                <div className="message-box">
                    <div className="title">
                        <h4>#{this.props.activeChannel.name}</h4>
                        <div className="logout">Logout</div>
                    </div>
                    <MessagePreview messages={this.props.messages} channel={this.props.activeChannel} users={this.props.users} />
                </div>
                <MessageForm onEnter={this.sendMessage} handleChange={this.handleChange} value={this.state.message} />
            </div>
        )
    }
}
const mapStateToProps = ({ chats }) => {
    return {
      messages: chats.messages,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      actions: bindActionCreators({
        sendMessage
      }, dispatch),
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);