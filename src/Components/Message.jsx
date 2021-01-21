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
        } else if (title.length > 50){
            title = title.slice(0,50)
        } else {

        }
    }

    duckReplacement()
    const path = message.url

    const pathFilter = () => {
        if (path.indexOf(`/:company` > -1 || path.indexOf(`/:tool`)) > -1 || path.indexOf(`/:language`) > -1 || path.indexOf(`/:reaction`) > -1 || path.indexOf(`/:reference`) > -1 || path.indexOf(`/:thing`) > -1 || path.indexOf(`/:behavior`) > -1 || path.indexOf(`/:something` > -1)) {
            return 
        }
    }

    pathFilter()

    return (
        <option value={path} label={title}>
            {title}
        </option>
    );
}

export default Message;