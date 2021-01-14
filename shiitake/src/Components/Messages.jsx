import React, { useState, useEffect } from 'react';
import Message from './Message.jsx'
 
function Messages() {
    const apiUrl = `https://foaas.com/operations`;

    const [messages, setMessages] = useState([])

    useEffect(() => {
        getMessagesWithFetch()
    }, [])

    const getMessagesWithFetch = async () => {
        const response = await fetch(apiUrl);
        const jsonData = await response.json();
        setMessages(jsonData);
    }

return (
        <div>
            <h2>Messages Component</h2>
            {messages.map(msg => 
                <Message message={msg} key={msg.name}/>
            )}
        </div>
    )        
}

export default Messages;