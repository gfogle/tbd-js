function guid() {
	function s4() {
		return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	}
	return s4() + s4() + '-' + s4() + '-' + s4() + '-' +s4() + '-' + s4() + s4() + s4();
}

function getValidTags() {
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

	return validTags;
}

module.exports = {
	guid: guid,
	validTags: getValidTags
};
