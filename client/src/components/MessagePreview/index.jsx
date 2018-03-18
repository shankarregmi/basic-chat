import React from 'react';

export default function({ messages }) {
    return (
        <div>
            <h2>Messages</h2>
          {
              messages.map((message, id) => <h3 key={id}>{message} </h3>)
          }
        </div>
    )
}