import React, { useState, useEffect } from "react";
import Message from "./Message.jsx";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import UserInput from "./UserInput.jsx";
import axios from "axios";

export default function Messages() {
	const [messages, setMessages] = useState([]);
	const [selectedMsg, setSelectedMsg] = useState("");

	let apiUrl = `https://foaas.com/operations`;

	useEffect(() => {
		axios.get(apiUrl).then((response) => {
			setMessages(response.data);
		});
	}, [apiUrl]);

	const handleChange = (event) => {
		setSelectedMsg(event.target.value);
		event.preventDefault();
	};

	return (
		<Form.Group id="msgMenu">
			<Form.Label htmlFor="selectedMsg">Select a message here:</Form.Label>
			<Row>
				<select column id="messages" onChange={handleChange}>
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
			<Row>
				<UserInput message={selectedMsg} />
			</Row>
		</Form.Group>
	);
}
