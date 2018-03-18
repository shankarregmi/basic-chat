import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { sendMessage } from '../../actions/messageActions';

import './chatdetail.css';

import MessageForm from '../../components/MessageForm';
import MessagePreview from '../../components/MessagePreview';

class ChatList extends PureComponent {
    constructor(props) {
        console.log(props);
        
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
            this.props.actions.sendMessage(this.state.message);
            this.setState({
                message: ''
            });
          }
    }
    render() {
        return(
            <div className="chat-detail-main">
            <MessagePreview messages={this.props.messages}/>
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