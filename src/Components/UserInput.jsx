import React from 'react';
import Result from './Result.jsx'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Messages from './Messages.jsx'

let nameInput = 'Felicia'
let senderInput = 'Anonymous'

function UserInput() {
    
    const handleChange = (event) => {
        nameInput = event.target.value
        senderInput = event.target.value
        // Messages.content.toName = nameInput
        // Messages.content.from = senderInput
        // Result.content.toName = nameInput
        // Result.content.from = senderInput
        // Result.content.url = Messages.select.value
        
        event.preventDefault()
    }

    return (
        <Form.Group >
            <Row>
                <Col lg>
                    <h4>Personalize It:</h4>
                </Col>
            </Row>
            <Form.Group 
                as={Row}>
                    <Form.Label 
                        column lg
                        htmlFor="nameInput">
                            Type Your Recipient's Name here:
                    </Form.Label>
                    <Form.Control
                        column lg
                        type="text" 
                        placeholder="Recipient's Name" 
                        id="nameInput"
                        onChange={handleChange}>
                    </Form.Control>
            </Form.Group>
            <Form.Group 
                as={Row}>
                    <Form.Label    
                        column lg       
                        htmlFor="senderInput">
                            Type Your Name here:
                    </Form.Label>
                    <Form.Control
                        column lg
                        type="text"
                        placeholder="Your Name"
                        id="senderInput"
                        onChange={handleChange}>
                    </Form.Control>
            </Form.Group>
            {/* <Form.Group 
                as={Row}>
                    <Form.Control
                        column lg
                        type="submit"
                        onSubmit={handleSubmit}>
                    </Form.Control>
            </Form.Group> */}
        </Form.Group>
    )
}

export default UserInput;