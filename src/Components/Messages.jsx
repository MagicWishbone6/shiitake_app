import React, { useState, useEffect } from 'react';
import Message from './Message.jsx'
import Result from './Result.jsx'

function Messages() {
    const [messages, setMessages] = useState([])
    const [content, setContent] = useState({value: `operations`})

    let apiUrl = `https://foaas.com/operations`;

    useEffect(() => {
        getMessagesWithFetch()
    }, [])

    const getMessagesWithFetch = async () => {
        const response = await fetch(apiUrl)
        const jsonData = await response.json()
        setMessages(jsonData)
    }

    const handleChange = (event) => {
        setContent({value: (event.target.value).substr(1)})
        Result.url = content.value
        event.preventDefault()
    }

return (
        <div id="msgMenu">
            <label 
                htmlFor="selectedMsg">
                Select the message you'd like to create:
            </label>
            <select 
                id="selectedMsg"
                onChange={handleChange}>
                {messages.map(msg => 
                    <Message 
                        message={msg} 
                        key={msg.name}
                        value={msg.url}
                        label={msg.name}
                    />
                )}
            </select>
            <Result content={{
                url: content.value,
                toName: 'Felicia',
                from: 'Anonymous',
                behavior: '',
                company: '',
                do: '',
                language: '',
                noun: '',
                reference: '',
                something: '',
                thing: '',
                tool: ''
            }}/>
        </div>
    )        
}

export default Messages;