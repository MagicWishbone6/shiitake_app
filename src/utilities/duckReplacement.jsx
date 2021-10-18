export function duckReplacement(text) {
	text = text + "";
	if (text.indexOf("Fuck") > -1) {
		text = text.replace(`Fuck`, `Duck`);
		duckReplacement();
	} else if (text.indexOf("fuck") > -1) {
		text = text.replace("fuck", "duck");
		duckReplacement();
	} else if (text.length > 50) {
		text = text.slice(0, 50);
	} else {
	}
	return text;
}
