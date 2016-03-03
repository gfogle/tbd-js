let vdom_definitions = {};
let action_definitions = {};
let vdom_instances = {};

function guid() {
	function s4() {
		return Math.floor((1 + Math.random()) * 0x10000)
		.toString(16)
		.substring(1);
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
					actions: definition.actions,
					render: definition.render
				};
			};

			return vdom_definitions[name];
		}
	},
	mount: function(name, id) {
		let defn = vdom_definitions[name];
		let element = document.getElementById(id);
		let component = new defn();
		let uid = guid();

		component.id = uid;
		vdom_instances[uid] = component;

		let htmlTree = component.render(
			{}, // no state
			{}, // no props
			component.actions.reduce((acc, curr) => {
				acc[curr] = action_definitions[curr];
			}, {})
		);

		element.appendChild(htmlTree);
	},
	div: function(styles, attrs, children) {
		let element = document.createElement("DIV");

		return element;
	}
};
