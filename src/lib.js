import dom from "./dom/dom";
import perf from "./perf/perf";

let vdom_definitions = {};
let action_definitions = {};
let vdom_instances = {};

function guid() {
	function s4() {
		return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	}
	return s4() + s4() + '-' + s4() + '-' + s4() + '-' +s4() + '-' + s4() + s4() + s4();
}

function register(name, definition) {
	if (vdom_definitions[name]) {
		throw new Error('Cannot register definition more than once');
	} else {
		// TODO: do i need to save these definitions at all?
		// TODO: should i be
		vdom_definitions[name] = function() {
			return {
				id: guid(),
				render: __DEV__ ? perf.instrument(name + "__render", definition.render) : definition.render
			};
		};

		return vdom_definitions[name]().render;
	}
}

function mount(name, id) {
	let defn = vdom_definitions[name];
	let element = document.getElementById(id);
	let component = new defn();

	vdom_instances[component.id] = component;

	element.appendChild(component.render(
		{}, // no state
		{}, // no props
		{}  // no actions
	));
}

module.exports = {
	register: __DEV__ ? perf.instrument('core::register', register) : register,
	mount: __DEV__ ? perf.instrument('core::mount', mount) : mount,
	dom: dom
};
