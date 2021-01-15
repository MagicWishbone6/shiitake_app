import React from 'react';

function Message({message}) {
    return (
        <option>
            {message.name}
        </option>
    );
}

export default Message;