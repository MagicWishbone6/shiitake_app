import React from 'react';

function Message(message) {

    return (
        <div>
            <h2>Message Component</h2>
            <h3>{message.name}</h3>
        </div>
    );
}

export default Message;