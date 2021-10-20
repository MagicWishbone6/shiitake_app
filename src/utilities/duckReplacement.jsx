export function duckReplacement(text, duck) {
	text = text + "";
	for (let i = 0; i < text.length; i++) {
		if (text.indexOf("Fuck") > -1) {
			let word = duck.charAt(0).toUpperCase() + duck.slice(1)
			text = text.replace(`Fuck`, word);
		} else if (text.indexOf("fuck") > -1) {
			text = text.replace("fuck", duck);
		}
	}
	return text;
}
