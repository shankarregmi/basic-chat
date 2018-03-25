import React from 'react';

import "./message-form.css";

export default function(props) {
    return (
        <div className="footer">
          <form>
          <input type="text" className="chat-input" value={props.value} onChange={props.handleChange} onKeyPress={props.onEnter} autoFocus/>
          <i className="glyphicon glyphicon-send"></i>
          </form>
        </div>
    )
}