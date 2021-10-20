import React from "react";
import Messages from "./Messages.jsx";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

export default function AppForm() {
	return (
		<Container>
			<Row>
				<h4>Customize It:</h4>
			</Row>
			<Row>
				<Form>
					<Messages />
				</Form>
			</Row>
		</Container>
	);
}
