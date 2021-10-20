import React from "react";
import { duckReplacement } from "../utilities/duckReplacement";
import { shortenTitle } from "../utilities/shortenTitle"

export default function Message({ message }) {
	let title = message.name;

	title = duckReplacement(title, "duck");
	title = shortenTitle(title);

	const path = message.url;

	return (
		<option value={path} label={title}>
			{title}
		</option>
	);
}
