import React, { useState, useEffect } from 'react';
import Message from './Message.jsx'
import Result from './Result.jsx'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'

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
        setContent({
            value: (event.target.value).substr(1),
            toName: 'Felicia',
            from: 'Benny'
        })
        Result.url = content.value
        Result.toName = content.toName
        Result.from = content.from
        event.preventDefault()
    }

return (
        <Form.Group id="msgMenu">
            <Form.Label
                htmlFor="selectedMsg">
                    Select a message here:
            </Form.Label>
            <Row>
                <select
                    column sm
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
            </Row>
        </Form.Group>
    )        
}

export default Messages;