import React from 'react';
import AppForm from './AppForm.jsx'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Result from './Result.jsx'
import Messages from './Messages.jsx'

function Home() {
    return (
        <Container>
            <Row>
                <Col md={{offset: .5}}>
                    <h2>Home Component</h2>
                </Col>
            </Row>
            <Row>
                <Col md={{span: 3, offset: .5}}>
                    <Result 
                        content={{
                            url: '',
                            toName: 'Felicia',
                            from: 'Anonymous'
                    }}>
                    </Result>
                </Col>
                <Col md={{span: 4, offset: 2}}>
                    <AppForm />
                </Col>
            </Row>
        </Container>
    )
}

export default Home;