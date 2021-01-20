import React, { useState, useEffect } from 'react';
import Message from './Message.jsx'
import Result from './Result.jsx'

function Messages() {
    const [messages, setMessages] = useState([])
    const [selection, setSelection] = useState()
    const [status, setStatus] = useState({value: "- make selection -"})
    const [content, setContent] = useState({value: ``, url: `operations`})

    const path = () => {
        if (content.url !== `operations`) {
            content.url = `operations${content.url}`
        }
    }

    const apiUrl = `https://foaas.com/${content.url}`;

    useEffect(() => {
        getMessagesWithFetch()
    }, [])

    const getMessagesWithFetch = async () => {
        const response = await fetch(apiUrl)
        const jsonData = await response.json()
        setMessages(jsonData)
    }

    const handleSelect = (event) => {
        setStatus({value: event.target.value, url: ``})
        setSelection({value: event.target.value, url: Selection.url})
        setContent({value: event.target.value, url: Selection.url})
        path()
        event.preventDefault()
    }

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
                        value={status}
                        url={status.url}> 
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
                        url={msg.url}
                    />
                )}
            </select>
            <Result content={{
                url: content.url,
                value: content.value,
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