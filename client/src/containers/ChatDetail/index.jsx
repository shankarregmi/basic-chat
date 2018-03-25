import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { sendMessage } from '../../actions/messageActions';

import './chatdetail.css';

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
                    author: this.props.user._id,
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
            <div className="chat-detail-main">
            <h2>#{this.props.activeChannel.name}</h2>
            <hr/>
            <MessagePreview messages={this.props.messages} channel={this.props.activeChannel}/>
                <div className="footer">
                    <MessageForm onEnter={this.sendMessage} handleChange={this.handleChange} value={this.state.message} />
                </div>
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