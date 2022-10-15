import { useState } from "react";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Message from "./Message";

export default function MessagesDropDown({ onChange }) {
	const [messages, setMessages] = useState([]);
	const label = "Select a message here:";
	const id = "messages";
	const apiUrl = `https://foaas.com/operations`;

	axios.get(apiUrl).then((response) => {
		setMessages(response.data);
	});

	return (
		<Form.Group as={Row}>
			<Form.Label htmlFor={id}>{label}</Form.Label>
			<Form.Control as={Row} id={id}>
				<select onChange={onChange}>
					{messages.map((msg) => (
						<Message
							message={msg}
							key={msg.name}
							value={msg.url}
							label={msg.name}
						/>
					))}
				</select>
			</Form.Control>
		</Form.Group>
	);
}
