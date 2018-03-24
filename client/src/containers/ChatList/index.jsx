import React, { PureComponent } from 'react';

import './chatlist.css';

class ChatList extends PureComponent {
    // constructor(props) {
    //     super(props);
    //     const { user } = props;
    //     this.state = {
    //         user
    //     };
    // }
    render() {
        const username = this.props.user ? this.props.user.username : null;
        return(
            <div className="list">
                <h4>Welcome</h4><h3> {username}</h3>
            </div>
        )
    }
}

export default ChatList;