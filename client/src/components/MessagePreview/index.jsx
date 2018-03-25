import React from 'react';

export default function({ messages, channel, users }) {
    const username = (authorId) => {
        return users.length && users.filter(user => user._id === authorId)[0].username;
    }
    return (
        <div className="body">
            {
                messages.filter(message => message.channel === channel._id).map((message, id) => {
                    return (
                        <div className="text" key={id}>
                            <div className="profile-pic">
                                <img src="https://scontent.fktm7-1.fna.fbcdn.net/v/t1.0-1/p320x320/18301915_1634100546619485_7539390022767162425_n.jpg?_nc_cat=0&amp;_nc_eui2=v1%3AAeHi9kvQc3KSM5NmSsurb_pXv7W9xVDAL0cXRRXLOaYzCIwERytpaNU38wchq2Lr7nSrY-RJMpl2mNk9RBDpZN0I2wRhxb54lNX0qp1vD5bFLg&amp;oh=c355f933d55dd6f015f16d10248cbf58&amp;oe=5B2E8924" alt="username" />
                            </div>
                            <div className="message-detail">
                                <div className="profile">
                                    <div className="name">{username(message.author)} <small>12:45 pm</small></div>
                                </div>
                                <div className="msg">
                                    <p>
                                        {message.body}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            
        </div>
    )
}