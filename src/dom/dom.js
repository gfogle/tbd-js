import perf from "../perf/perf";
import helpers from "../helpers/helpers";

let dom = {};

function createDomElement(tag, styles, attrs, children) {
	// TODO: use DOM Fragments instead?
	let element = document.createElement(tag);

	if (element instanceof HTMLUnknownElement) {
		// see: https://developer.mozilla.org/en-US/docs/Web/API/HTMLUnknownElement
		// see: https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement

		// TODO: should we allow "invalid" tags to be created?
		throw new Exception("Invalid tag supplied to create: " + tag);
	} else {
		if (styles) {
			// TODO: check here for invalid properties and / or values?
			// TODO: would be cool to run this through a linter
			// TODO: need to handle :hover, ::before, etc
			Object.keys(styles).forEach((s) => {
				element.style[s] = styles[s];
			});
		}

		if (attrs) {
			// TODO: check for leading data-* to attach to dataset instead
			Object.keys(attrs).forEach((a) => {
				element[a] = attrs[a];
			});
		}

		if (Array.isArray(children)) {
			children.forEach((child) => { element.appendChild(child); });
		} else if (typeof children === 'string') {
			element.appendChild(document.createTextNode(children));
		}

		return element;
	}
}

function createValidTags() {
	const validTags = helpers.getValidTags();

	validTags.forEach((tag) => {
		if (__DEV__) {
			dom[tag] = perf.instrument('dom::' + tag, (styles, attrs, children) => {
				return createDomElement(tag.toUpperCase(), styles, attrs, children);
			});
		} else {
			dom[tag] = (styles, attrs, children) => {
				return createDomElement(tag.toUpperCase(), styles, attrs, children);
			};
		}
	});
};

createValidTags();

module.exports = dom;
