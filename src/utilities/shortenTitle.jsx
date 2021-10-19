export function shortenTitle(text) {
	if (text.length > 37) {
		text = text.slice(0, 37);
	}
	return text;
}
