import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ChatList from '../ChatList';
import ChatDetail from '../ChatDetail';

import { connect as io, disconnect } from '../../utils/socket';
import { logout } from '../../actions/authActions';

import './chats.css';

class Chat extends PureComponent {
    componentDidMount() {
        io();
    }

    logout = () => {
        this.props.actions.logout();
        disconnect();
    }

    render() {
        console.log('chatmain', this.props);
        return(
            <div className="main">
                <div className="chat-list">
                    <ChatList user={this.props.user}/>
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
const mapStateToProps = state => {
    const { user } = state.auth;
    return {
        user
    }
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({
      logout,
    }, dispatch),
  };
};

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(Chat);
