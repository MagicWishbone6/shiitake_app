import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import ResultCard from "./ResultCard";
import { customizePath } from "../utilities/customizePath";
import axios from "axios";
import { duckReplacement } from "../utilities/duckReplacement";
import InputTextBox from "./InputTextBox";
import InputSectionHeader from "./InputSectionHeader";
import MessagesDropDown from "./MessagesDropDown";

export default function UserInput() {
	// let messageInfo = {
	// 	recipient: "",
	// 	sender: "",
	// 	company: "",
	// 	tool: "",
	// 	do: "",
	// 	something: "",
	// 	noun: "",
	// 	reaction: "",
	// 	behavior: "",
	// 	thing: "",
	// 	language: "",
	// };

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
		event.preventDefault();
	};

	const handleChangeRecipient = (event) => {
		setInput({
			recipient: event.target.value,
			sender: input.sender,
		});
		event.preventDefault();
	};

	const handleChangeSender = (event) => {
		setInput({
			recipient: input.recipient,
			sender: event.target.value,
		});
		event.preventDefault();
	};

	useEffect(() => {
		const path = customizePath(selectedMsg, input.sender, input.recipient);
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
	}, [input.recipient, input.sender, selectedMsg]);

	const recipientInput = {
		label: "Type Your Recipient's Name here:",
		placeholder: "Recipient's Name",
		id: "nameInput",
	};
	const senderInput = {
		label: "Type Your Name here:",
		placeholder: "Your Name",
		id: "senderInput",
	};

	return (
		<Form>
			<Form.Group>
				<InputSectionHeader text="Select a Message:" />
				<MessagesDropDown onChange={handleChangeMsg} />
				<InputSectionHeader text="Personalize It:" />
				<InputTextBox
					label={recipientInput.label}
					placeholder={recipientInput.placeholder}
					id={recipientInput.id}
					onChange={handleChangeRecipient}
				/>
				<InputTextBox
					label={senderInput.label}
					placeholder={senderInput.placeholder}
					id={senderInput.id}
					onChange={handleChangeSender}
				/>
				<Form.Group as={Row}>
					<div>
						<ResultCard customMessage={customMessage} />
					</div>
				</Form.Group>
			</Form.Group>
		</Form>
	);
}
