import React from "react";
import { duckReplacement } from "../utilities/duckReplacement";

function Message({ message }) {
	let title = message.name

	title = duckReplacement(title);
	const path = message.url;

	const pathFilter = () => {
		if (
			path.indexOf(`/:company` > -1 || path.indexOf(`/:tool`)) > -1 ||
			path.indexOf(`/:language`) > -1 ||
			path.indexOf(`/:reaction`) > -1 ||
			path.indexOf(`/:reference`) > -1 ||
			path.indexOf(`/:thing`) > -1 ||
			path.indexOf(`/:behavior`) > -1 ||
			path.indexOf(`/:something` > -1)
		) {
			return;
		}
	};

	pathFilter();

	return (
		<option value={path} label={title}>
			{title}
		</option>
	);
}

export default Message;
