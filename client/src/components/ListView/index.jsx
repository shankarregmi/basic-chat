import React from 'react';

export default function({array, heading, name, activeChannel}) {
    const activeID = activeChannel ? activeChannel._id : null;
    return (
        <div className="content">
                    <div className="group">
                        <div className="c-header">
                            <span>{heading}</span>
                            {heading === 'Channels' && <a className="addbutton">+</a>}
                        </div>
                        <div className="c-body">
                            <ul>
                                {
                                    array.map((item, _id) => {
                                        return (
                                            <li key={_id} className={item._id===activeID ? 'active': ''}>
                                                <div className="name">
                                                    <i className="icons">#</i>
                                                    <span>{item[name]}</span>
                                                </div>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
    )
}
