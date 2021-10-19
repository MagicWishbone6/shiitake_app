import Card from "react-bootstrap/Card";

export default function ResultCard({ customMessage }) {
	return (
		<Card className="resultCard">
			<Card.Body className="cardMessage">{customMessage.message}</Card.Body>
			<Card.Subtitle className="cardFrom">- {customMessage.from}</Card.Subtitle>
		</Card>
	);
}
