import React from 'react';

function Message({message}) {
    let title = toString(message.name)
    if (title.indexOf('fuck') !== -1) {
        title = () => (title.splice(title.indexOf('fuck'),4,'duck'))
    }

    return (
        <option>
            {title}
        </option>
    );
}

export default Message;