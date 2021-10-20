import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import UserInput from "./UserInput";

export default function Home() {
	return (
		<Container>
			<Row>
				<h3>Create a Custom Message</h3>
			</Row>
			<Row>
				<Form>
					<UserInput />
				</Form>
			</Row>
		</Container>
	);
}
