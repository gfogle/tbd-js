import dom from "./dom/dom";

let vdom_definitions = {};
let action_definitions = {};
let vdom_instances = {};

function guid() {
	function s4() {
		return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	}
	return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
	s4() + '-' + s4() + s4() + s4();
}

module.exports = {
	register: function(name, definition) {
		if (vdom_definitions[name]) {
			throw new Error('Cannot register definition more than once');
		} else {
			vdom_definitions[name] = function() {
				return {
					id: guid(),
					render: definition.render
				};
			};

			// TODO: should I be wrapping render to do other things?
			return definition.render;
		}
	},
	mount: function(name, id) {
		let defn = vdom_definitions[name];
		let element = document.getElementById(id);
		let component = new defn();

		vdom_instances[component.id] = component;

		element.appendChild(component.render(
			{}, // no state
			{}, // no props
			{}  // no actions
		));
	},
	dom: dom
};
