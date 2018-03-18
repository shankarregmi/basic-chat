import React from 'react';

import "./message-form.css";

export default function(props) {
    return (
        <div>
          <form>
            <div className="message-form">
              <label htmlFor="message-input"></label>
              <div className="input-group">
                <div className="input-group-addon">+</div>
                <input type="text" className="form-control" value={props.value} onChange={props.handleChange} onKeyPress={props.onEnter}/>
              </div>
            </div>
          </form>
        </div>
    )
}