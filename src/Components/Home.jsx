import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import UserInput from "./UserInput";

export default function Home() {
	return (
		<Container>
			<Row>
				<UserInput />
			</Row>
		</Container>
	);
}
