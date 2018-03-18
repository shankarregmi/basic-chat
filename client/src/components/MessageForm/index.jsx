import React from 'react';

import "./message-form.css";

export default function() {
    return (
        <div>
          <form>
            <div className="form-group">
              <label for="message-input"></label>
              <div className="input-group">
                <div className="input-group-addon">+</div>
                <input type="text" className="form-control" id="exampleInputAmount" placeholder="Type something..." />
              </div>
            </div>
          </form>
        </div>
    )
}