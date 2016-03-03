let dom = {};

function createDomElement(tag, styles, attrs, children) {
	//console.log(tag, " : ", styles, " : ", " : ", attrs, " : ", children);
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
	// TODO: recreate this list as a polyfill fetch on document
	// see: http://www.w3schools.com/tags/
	const validTags = [
		'a', 'abbr', 'address', 'area', 'article', 'aside', 'audio',
		'b', 'base', 'bdi', 'bdo', 'blockquote', 'body', 'br', 'button',
		'canvas', 'caption', 'cite', 'code', 'col', 'colgroup',
		'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt',
		'em', 'embed',
		'fieldset', 'figcaption', 'figure', 'footer', 'form',
		'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hr', 'html',
		'i', 'iframe', 'img', 'input', 'ins',
		'kbd', 'keygen',
		'label', 'legend', 'li', 'link',
		'main', 'map', 'mark', 'menu', 'menuitem', 'meta', 'meter',
		'nav', 'nosript',
		'object', 'ol', 'optgroup', 'option', 'output',
		'p', 'param', 'pre', 'progress',
		'q',
		'rp', 'rt', 'ruby',
		's','samp','script','section','select','small','source','span','strong','style','sub','summary','sup',
		'table','tbody','td','textarea','tfoot','th','thead','time','title','tr','track',
		'u','ul',
		'var','video',
		'wbr'
	];

	validTags.forEach((tag) => {
		dom[tag] = (styles, attrs, children) => {
			return createDomElement(tag.toUpperCase(), styles, attrs, children);
		};
	});
};

createValidTags();

module.exports = dom;
