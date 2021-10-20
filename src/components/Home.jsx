import React from "react";
import AppForm from "./AppForm.jsx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export default function Home() {
	return (
		<Container>
			<Row>
				<h3>Create a Custom Message:</h3>
			</Row>
			<Row>
				<AppForm />
			</Row>
		</Container>
	);
}
