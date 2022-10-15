import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export default function InputTextBox({ id, label, placeholder, onChange }) {
	return (
		<Form.Group as={Row}>
			<Form.Label htmlFor={id}>{label}</Form.Label>
			<Form.Control
				type="text"
				placeholder={placeholder}
				id={id}
				onChange={onChange}
			></Form.Control>
		</Form.Group>
	);
}
