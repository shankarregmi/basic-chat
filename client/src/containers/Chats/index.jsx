import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ChatList from '../ChatList';
import ChatDetail from '../ChatDetail';

import { connect as socket, disconnect } from '../../utils/socket';
import { logout } from '../../actions/authActions';
import { loadChannels } from '../../actions/channelActions';
import './chats.css';

class Chat extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            myChannels: []
        };
    }
    componentDidMount() {
        const io = socket();
        this.props.actions.loadChannels(io, this.props.user._id);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.myChannels && nextProps.myChannels.length) {
            this.setState({
                myChannels: nextProps.myChannels
            });
        }
    }

    logout = () => {
        this.props.actions.logout();
        disconnect();
    }

    render() {
        return(
            <div className="main">
                <div className="chat-list">
                    <ChatList user={this.props.user} channels={this.state.myChannels} />
                </div>
                <div className="chat-detail">
                    {this.state.myChannels && this.state.myChannels.length && <ChatDetail currentChannel={this.state.myChannels[0]} />}
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
    const { myChannels } = state.channels;
    return {
        user,
        myChannels
    }
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({
        loadChannels,
        logout
    }, dispatch),
  };
};

// Wrap the component to inject dispatch and state into it
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Chat));
