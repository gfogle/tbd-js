import TBD from "TBD";

const { register, mount } = TBD;
const { div } = TBD.dom;

TBD.register('Root', {
	render: function(state, props, actions) {
		const divStyles = {
			position: 'absolute',
			top: 0,
			left: 0,
			bottom: 0,
			right: 0,
			backgroundColor: '#303030',
			invalid: 'fails?',
			borderRadius: 'abc'
		};
		return div(
			divStyles,
			{}, // attrs
			[
				// children
			]
		);
	}
});

TBD.mount('Root', 'root');
