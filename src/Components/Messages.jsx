import React, { useState, useEffect } from "react";
import Message from "./Message.jsx";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import axios from "axios";

export default function Messages({ onChange }) {
	const [messages, setMessages] = useState([]);

	let apiUrl = `https://foaas.com/operations`;

	useEffect(() => {
		axios.get(apiUrl).then((response) => {
			setMessages(response.data);
		});
	}, [apiUrl]);

	return (
		<Form.Group id="msgMenu">
			<Form.Label htmlFor="selectedMsg">Select a message here:</Form.Label>
			<Row>
				<select column id="messages" onChange={onChange}>
					{messages.map((msg) => (
						<Message
							message={msg}
							key={msg.name}
							value={msg.url}
							label={msg.name}
						/>
					))}
				</select>
			</Row>
		</Form.Group>
	);
}
