import React from 'react';
import Messages from './Messages.jsx'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'

function AppForm() {
    return (
        <Container>
            <Row>
                <Col>
                    <h4>Customize It:</h4>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form>
                        <Messages />
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default AppForm;