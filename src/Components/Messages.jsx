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

    const findTextAndReplace = (data, searchTerm, replacement) => {
        const dataMod = data.map(msgName => {
            if (msgName.indexOf(searchTerm) >= 0) {
                msgName.splice(msgName.indexOf(searchTerm), searchTerm.length,replacement)
            }
            return dataMod
        })
    }

    const curseWords = ["fuck"]

    const modMessages = () => {
        const resultMsg = () => (messages.map(msg => (
            findTextAndReplace(msg.name, curseWords[0], "duck"))))
        
        return resultMsg
    }

    console.log(modMessages())
    // console.log({selection})
    // console.log({apiUrl})
    // console.log(content.value)
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
                value: content.value,
                toName: 'Felicia',
                from: 'Anonymous',
                modMsgs: modMessages()
            }}/>
        </div>
    )        
}

export default Messages;