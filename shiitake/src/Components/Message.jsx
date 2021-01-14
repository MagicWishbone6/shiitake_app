import React from 'react';

function Message({message}) {

    return (
        <div>
            <p>Message Component</p>
            <h4>{message.name}</h4>
            <h4>{message.url}</h4>
        </div>
    );
}

export default Message;