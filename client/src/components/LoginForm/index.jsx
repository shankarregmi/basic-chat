import React from 'react';

export default function({ username, handleChange, onEnter }) {
    return (
        <div className="col-md-4 col-md-offset-4">
            <form>
                <div className="input-group input-group-lg">
                    <span className="input-group-addon" id="sizing-addon1">
                        <i className="glyphicon glyphicon-user" aria-hidden="true"></i>
                    </span>
                    <input type="text" name="username" className="form-control" value={username} onChange={handleChange} onKeyPress={onEnter} placeholder="Username" autoComplete="off" />
                </div>
            </form>
        </div>
    )
}