function createDomElement(tag, styles, attrs, children) {
	let element = document.createElement(tag);

	if (element instanceof HTMLUnknownElement) {
		// TODO: should we allow "invalid" tags to be created?
		throw new Exception("Invalid tag supplied to create: " + tag);
	} else {
		// TODO: check here for invalid properties and / or values?

		Object.keys(styles).forEach((s) => {
			element.style[s] = styles[s];
		});

		Object.keys(attrs).forEach((a) => {
			element[a] = attrs[a];
		});

		return element;
	}
}

module.exports = {
	div: function(styles, attrs, children) {
		return createDomElement("DIV", styles, attrs, children);
	}
};
