import React from 'react';

export default function({ messages, channel }) {
    return (
        <div>
          {
              messages.filter(message => message.channel === channel._id).map((message, id) => <h3 key={id}>{message.body} </h3>)
          }
        </div>
    )
}