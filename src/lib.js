import dom from "./dom/dom";
import perf from "./perf/perf";
import Component from "./component/component";

let vdom_definitions = {};
let action_definitions = {};
let vdom_instances = {};

function register(name, definition) {
	if (vdom_definitions[name]) {
		throw new Error('Cannot register definition more than once');
	} else {
		vdom_definitions[name] = definition;

		return vdom_definitions[name].render;
	}
}

function mount(name, id) {
	let defn = vdom_definitions[name];
	let element = document.getElementById(id);
	let component = new Component(name, defn);

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
