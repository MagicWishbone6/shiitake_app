import React from 'react';
import Result from './Result.jsx'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

let nameInput = 'Felicia'
let senderInput = 'Anonymous'

function UserInput() {
    
    const handleClick = event => {
        nameInput = document.getElementById("nameInput").value
        senderInput = document.getElementById("senderInput").value
        Result.content.toName = nameInput
        Result.content.from = senderInput
        event.preventDefault()
    }

    return (
        <Form.Group >
            <Row>
                <Col lg={true}>
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
                        column lg={true}
                        type="text" 
                        placeholder="Recipient's Name" 
                        id="nameInput">
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
                        column lg={true}
                        type="text"
                        placeholder="Your Name"
                        id="senderInput">
                    </Form.Control>
            </Form.Group>
            <Form.Group 
                as={Row}>
                    <Form.Control
                        column lg={true}
                        type="submit"
                        onClick={handleClick}>
                    </Form.Control>
            </Form.Group>
        </Form.Group>
    )
}

export default UserInput;