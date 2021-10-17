import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import FoaasCard from 'react-foaas-card'

function UserInput({type}) {
    const [input, setInput] = useState({
        isSet:  false})
    let path = type

    let toNameInput = 'Felicia'
    let senderInput = 'Your Best Friend'

    const handleChangeName = (event) => {
        toNameInput = event.target.value

        event.preventDefault()
    }

    const handleChangeFrom = (event) => {
        senderInput = event.target.value

        event.preventDefault()
    }

    const handleClick = (event) => {
        setInput({isSet: true})
        
        event.preventDefault()
    }

    path = path.replace("/:from", '')
    path = path.replace("/:name", `/${toNameInput}`)
 
    return (
        <Form.Group >
            <Row>
                <Col>
                    <h3> </h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h4>Personalize It:</h4>
                </Col>
            </Row>
            <Form.Group 
            as={Row}>
                <Form.Label 
                column
                htmlFor="nameInput">
                    Type Your Recipient's Name here:
                </Form.Label>
                <Form.Control
                column
                type="text" 
                placeholder="Recipient's Name" 
                id="nameInput"
                onChange={handleChangeName}>
                </Form.Control>
            </Form.Group>
            <Form.Group 
            as={Row}>
                <Form.Label    
                column      
                htmlFor="senderInput">
                    Type Your Name here:
                </Form.Label>
                <Form.Control
                column
                type="text"
                placeholder="Your Name"
                id="senderInput"
                onChange={handleChangeFrom}>
                </Form.Control>
            </Form.Group>
            <Form.Group 
            as={Row}>
                <Form.Control
                column
                type="submit"
                onClick={handleClick}>
                </Form.Control>
            </Form.Group>
            {/* <Form.Group 
            as={Row}>
                <Col>
                    <div>
                        <FoaasCard
                        id='result'
                        type={path}
                        from={senderInput}
                        middleFinger={false}
                        darkMode={false}>
                        </FoaasCard>
                    </div>
                </Col>
            </Form.Group> */}
        </Form.Group>
    )
}

export default UserInput;