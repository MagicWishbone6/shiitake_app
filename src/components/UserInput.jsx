import React, { Children, useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import ResultCard from "./ResultCard";
import { customizePath } from "../utilities/customizePath";
import axios from "axios";
import { duckReplacement } from "../utilities/duckReplacement";
import Messages from "./Messages";

export default function UserInput({ message }) {
	const [input, setInput] = useState({
		recipient: "Felicia",
		sender: "Your Best Friend",
	});
	const [customMessage, setCustomMessage] = useState({
		message: "",
		from: input.sender,
	});
	const [selectedMsg, setSelectedMsg] = useState("");

	const handleChangeMsg = (event) => {
		setSelectedMsg(event.target.value);
		console.log(selectedMsg)
		event.preventDefault();
	};

	const handleChangeRecipient = (event) => {
		setInput({ 
			recipient: event.target.value,
			sender: input.sender 
		});
		event.preventDefault();
	};

	const handleChangeSender = (event) => {
		setInput({ 
			recipient: input.recipient,
			sender: event.target.value 
		});
		event.preventDefault();
	};

	useEffect(() => {
		let path = `https://foaas.com${selectedMsg}`;
		console.log(path)
		path = customizePath(path, input.sender, input.recipient);
		axios
			.get(path, {
				headers: {
					Accept: "application/json",
				},
			})
			.then((response) => {
				setCustomMessage({
					message: duckReplacement(response.data.message, "duck"),
					from: input.sender,
				});
			});
	}, [message, input.recipient, input.sender, selectedMsg]);

	return (
		<Form.Group>
			<Row>
				<h4>Customize It:</h4>
			</Row>
			<Row>
				<Messages onChange={handleChangeMsg}/>
			</Row>
			<Row>
				<h4>Personalize It:</h4>
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
			<Form.Group as={Row}>
				<div>
					<ResultCard customMessage={customMessage} />
				</div>
			</Form.Group>
		</Form.Group>
	);
}
