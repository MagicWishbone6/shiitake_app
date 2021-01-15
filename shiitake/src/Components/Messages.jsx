import React, { useState, useEffect } from 'react';
import Message from './Message.jsx'
import Result from './Result.jsx'

function Messages() {
    const [messages, setMessages] = useState([])
    const [selection, setSelection] = useState()
    const [status, setStatus] = useState({value: "- make selection -"})
    const [content, setContent] = useState({value: `operations`})

    const apiUrl = `https://foaas.com/${content.value}`;

    useEffect(() => {
        getMessagesWithFetch()
    }, [])

    const getMessagesWithFetch = async () => {
        const response = await fetch(apiUrl);
        const jsonData = await response.json();
        setMessages(jsonData);
    }

    const handleSelect = (event) => {
        setStatus({value: event.target.value})
        setSelection({value: event.target.value})
        setContent({value: event.target.value})
        event.preventDefault()
    }

    console.log({selection})
    console.log({apiUrl})
    console.log(content.value)
return (
        <div id="msgMenu">
            <label 
                htmlFor="selectedMsg">
                Select the message you'd like to create:
            </label>
            <select 
                value={selection}
                id="selectedMsg"
                onChange={handleSelect}>
                    <option 
                        id="optionStatus"
                        value={status}> 
                        {status.value}  
                    </option>
                    <option 
                        id="optionsLineBreak"
                        value=" - - - ">
                         - - - 
                    </option>
                {messages.map(msg => 
                    <Message 
                        message={msg} 
                        key={msg.name}
                        value={msg.name}
                    />
                )}
            </select>
            <Result content={{
                value: content.value
            }}/>
        </div>
    )        
}

export default Messages;