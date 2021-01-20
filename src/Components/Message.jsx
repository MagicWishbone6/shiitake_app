import React from 'react';

function Message({message}) {
    let title = message.name
    
    const duckReplacement = () => {
        if (title.indexOf('Fuck') > -1) {
            title = title.replace(`Fuck`, `Duck`)
            duckReplacement()
        } else if (title.indexOf('fuck') > -1) {
            title = title.replace('fuck','duck')
            duckReplacement()
        } else {
            
        }
    }

    duckReplacement()

    return (
        <option url={message.url}>
            {title}
        </option>
    );
}

export default Message;