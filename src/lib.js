import dom from "./dom/dom";
import perf from "./perf/perf";
import Component from "./component/component";
import router from "./router/router";
import events from "./events/events";

let vdom_definitions = {};
let vdom_instances = {};
let initialMount = false;

function register(name, definition) {
	if (vdom_definitions[name]) {
		throw new Error('Cannot register definition more than once');
	} else {
		vdom_definitions[name] = new Component(name, definition);

		return vdom_definitions[name].render;
	}
}

function subscribeToRoutes(id) {
	events.subscribe('routeChanged', (args) => {
		mount(args, id);
	});
}

function mount(name, id) {
	let defn = vdom_definitions[name];
	let element = document.getElementById(id);
	let existing = element.firstElementChild;
	let component = new Component(name, defn);

	vdom_instances[component.id] = component;

	if (existing) {
		element.replaceChild(
			component.render({}, {}, {}),
			existing
		);
	} else {
		element.appendChild(component.render(
			{}, // no state
			{}, // no props
			{}  // no actions
		));
	}

	if (!initialMount) {
		subscribeToRoutes(id);
		initialMount = true;
	}
}

module.exports = {
	register: __DEV__ ? perf.instrument('core::register', register) : register,
	mount: __DEV__ ? perf.instrument('core::mount', mount) : mount,
	dom: dom,
	router: router,
	events: events
};
