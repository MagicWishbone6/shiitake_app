import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import FormControl from "react-bootstrap/FormControl";
import Result from "./Result.jsx";

function UserForm2(message) {
	const [recipient, setRecipient] = useState("");
	const [from, setFrom] = useState("");

	const handleChange = (event) => {
		if (event.target.id === "nameInput") {
			setRecipient(event.target.value);
		} else if (event.target.id === "fromInput") {
			setFrom(event.target.value);
		}

		event.preventDefault();
	};

	return (
		<Container>
			<h5>Standard Inputs</h5>
			<FormControl
				id="nameInput"
				type="text"
				placeholder="Your Recipient's Name"
				onChange={handleChange}
			/>
			<FormControl
				id="fromInput"
				type="text"
				placeholder="Your Name"
				onChange={handleChange}
			/>
			{/* <h5>
                Special Inputs
            </h5>
            <FormControl
            type="text"
            placeholder="Recipient's Company" /> */}
			<Result
				content={{
					url: message,
					toName: recipient,
					from: from,
				}}
			/>
		</Container>
	);
}

export default UserForm2;
