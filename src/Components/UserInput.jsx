import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FoaasCard from "react-foaas-card";

export default function UserInput({message}) {
	const [input, setInput] = useState({
		recipient: "Felicia",
		sender: "Your Best Friend"
	});

	const handleChangeRecipient = (event) => {
		setInput({recipient: event.target.value})
		event.preventDefault();
	};

	const handleChangeSender = (event) => {
		setInput({sender: event.target.value})
		event.preventDefault();
	};

	const getMessageTitle = () => {
		const msg = message + ""
		const sliceIndex = msg.indexOf('/')
		const title = msg.slice(0, sliceIndex)
		return title
	}

	return (
		<Form.Group>
			<Row>
				{/* right now this first row, col, and H3 is just here for spacing */}
				<Col>
					<h3> </h3>
				</Col>
			</Row>
			<Row>
				<Col>
					<h4>Personalize It:</h4>
				</Col>
			</Row>
			<Form.Group as={Row}>
				<Form.Label column htmlFor="nameInput">
					Type Your Recipient's Name here:
				</Form.Label>
				<Form.Control
					column
					type="text"
					placeholder="Recipient's Name"
					id="nameInput"
					onChange={handleChangeRecipient}
				></Form.Control>
			</Form.Group>
			<Form.Group as={Row}>
				<Form.Label column htmlFor="senderInput">
					Type Your Name here:
				</Form.Label>
				<Form.Control
					column
					type="text"
					placeholder="Your Name"
					id="senderInput"
					onChange={handleChangeSender}
				></Form.Control>
			</Form.Group>
			<Form.Group 
            as={Row}>
                <Col>
                    <div>
                        <FoaasCard
							id='result'
							type={getMessageTitle()}
							from={input.sender}
							middleFinger={false}
							darkMode={false}>
                        </FoaasCard>
                    </div>
                </Col>
            </Form.Group>
		</Form.Group>
	);
};
