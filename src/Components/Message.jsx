import React from "react";
import { duckReplacement } from "../utilities/duckReplacement";
import { shortenTitle } from "../utilities/shortenTitle"

export default function Message({ message }) {
	let title = message.name;

	title = duckReplacement(title);
	// right now, this second duckReplacement is used for one title only
	title = duckReplacement(title);
	title = shortenTitle(title);

	const path = message.url;

	return (
		<option value={path} label={title}>
			{title}
		</option>
	);
}
