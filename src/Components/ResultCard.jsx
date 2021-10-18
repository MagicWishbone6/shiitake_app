import Card from "react-bootstrap/Card";

export default function ResultCard({ customMessage }) {
	return (
		<Card>
			<Card.Body>{customMessage.message}</Card.Body>
			<Card.Subtitle>- {customMessage.from}</Card.Subtitle>
		</Card>
	);
}
