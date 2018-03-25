import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ChatList from '../ChatList';
import ChatDetail from '../ChatDetail';

import { connect as socket, disconnect , socketEvents} from '../../utils/socket';
import { logout } from '../../actions/authActions';
import { loadChannels } from '../../actions/channelActions';
import './chats.css';

class Chat extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            myChannels: [],
            activeChannel: {}
        };
    }
    socket = null

    componentDidMount() {
        this.socket = socket();
        socketEvents();
        this.props.actions.loadChannels(this.socket, this.props.me._id);
    }

    componentWillReceiveProps(nextProps) {
        this.setState(nextProps);
        if (nextProps.activeChannel) {
        }
    }

    logout = () => {
        this.props.actions.logout();
        disconnect();
    }

    render() {
        return(
            this.props.me ? <div className="main">
                <div className="chat-list">
                    <ChatList me={this.props.me} channels={this.state.myChannels} activeChannel={this.state.activeChannel} socket={this.socket} users={this.props.users} />
                </div>
                <div className="chat-detail">
                    <ChatDetail activeChannel={this.state.activeChannel} me={this.props.me} socket={this.socket} users={this.props.users} />
                </div>
                <div className="logout-container">
                    <button onClick={this.logout}>
                        <i className="glyphicon glyphicon-off"></i>
                    </button>
                </div>
            </div> : <span>Loading..</span>
        )
    }
}
const mapStateToProps = state => {
    const { me, users } = state.auth;
    const { myChannels, activeChannel } = state.channels;
    return {
        me,
        users,
        myChannels,
        activeChannel
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
export default connect(mapStateToProps, mapDispatchToProps)(Chat);
