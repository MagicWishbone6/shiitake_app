export function customizePath(selectedMsg, sender, recipient) {
	let path = `https://foaas.com${selectedMsg}`
	if (path.indexOf("name") > -1) {
		path = path.replace(":name", recipient);
	}
	if (path.indexOf("from") > -1) {
		path = path.replace(":from", sender);
	}
	return path;
}
