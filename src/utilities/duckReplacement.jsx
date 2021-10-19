export function duckReplacement(text) {
	text = text + "";
	if (text.indexOf("Fuck") > -1) {
		text = text.replace(`Fuck`, `Duck`);
		duckReplacement();
	} else if (text.indexOf("fuck") > -1) {
		text = text.replace("fuck", "duck");
		duckReplacement();
	}
	return text;
}
