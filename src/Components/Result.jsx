import React, { useState, useEffect } from "react";
// import FoaasCard from 'react-foaas-card'
import Card from "react-bootstrap/Card";

function Result({ content }) {
	// let path = content.url

	// path = path.replace("/:from", `/${content.from}`)
	// path = path.replace("/:name", `/${content.toName}`)

	const [result, setResult] = useState({});

	// let apiUrl = `https://foaas.com/${path}`
	let apiUrl = `https://foaas.com/${content.url}`;

	useEffect(() => {
		getResultWithFetch();
	}, []);

	const getResultWithFetch = async () => {
		const response = await fetch(apiUrl);
		const jsonData = await response.json();
		setResult(jsonData);
		console.log(result);
	};

	const handleLoad = (event) => {
		console.log(result);
		event.preventDefault();
	};

	return (
		<div className="resultCard">
			{/* <FoaasCard
            type={content.url}
            from={content.from}
            middleFinger={false}
            darkMode={false}>
            </FoaasCard> */}
			<Card onLoad={handleLoad}>
				<Card.Title>{result.message}</Card.Title>
				<Card.Text style={{ fontStyle: "italic", fontWeight: "lighter" }}>
					- {result.subtitle}
				</Card.Text>
			</Card>
		</div>
	);
}

export default Result;
