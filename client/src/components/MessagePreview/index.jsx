import React from 'react';

export default function({ messages, channel, users }) {
    const username = (authorId) => {
        return users.length && users.filter(user => user._id === authorId)[0].username;
    }
    return (
        <div className="message-preview">
          {
              messages.filter(message => message.channel === channel._id).map((message, id) => {
                  return (
                      <div key={id}>
                        <span className="chat-detail-username">{username(message.author)} : </span>
                        <span className="chat-detail-msg-body"> {message.body}</span>
                      </div>
                  )
              })
          }
        </div>
    )
}