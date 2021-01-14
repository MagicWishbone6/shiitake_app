import React from 'react';
import Message from './Message.jsx'
 
function Messages() {
    const apiUrl = `https://foaas.com/operations`;

    fetch(apiUrl) 
        .then((res) => res.json())
        .then(res =>  
            console.log(res))
        .catch((error) => { 
            console.error('Error:', error)
        })
    
return (
        <div>
            <h2>Messages Component</h2>
            <Message />
        </div>
    )
}

export default Messages;