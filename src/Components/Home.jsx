import React from "react";
import AppForm from "./AppForm.jsx";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function Home() {
	return (
		<Container>
			<Row>
				<Col>
					<h3>Create a Custom Message:</h3>
				</Col>
			</Row>
			<Row>
				<Col>
					<AppForm />
				</Col>
			</Row>
		</Container>
	);
}

export default Home;
