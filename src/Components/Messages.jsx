import React, { useState, useEffect } from 'react';
import Message from './Message.jsx'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import UserForm2 from './UserForm2.jsx';
// import UserInput from './UserInput.jsx';

function Messages() {
    const [messages, setMessages] = useState([])
    // const [content, setContent] = useState({
    //     value: `operations`,
    //     toName: `Felicia`,
    //     from: `Your Best Friend`
    // })
    const [selectedMsg, setSelectedMsg] = useState({})

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
        setSelectedMsg((event.target.value).substr(1))
        console.log(selectedMsg)
        event.preventDefault()
    }

return (
        <Form.Group 
        id="msgMenu">
            <Form.Label
            htmlFor="selectedMsg">
                Select a message here:
            </Form.Label>
            <Row>
                <select
                column
                id="messages"
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
            <Row>
                <Col>
                <h5> </h5>
                </Col>
            </Row>
            <Row>
                <Col>
                    <UserForm2 message={selectedMsg}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    {/* <UserInput 
                        type={''}/> */}
                </Col>
            </Row>
        </Form.Group>
    )        
}

export default Messages;