import TBD from "TBD";

const { register, mount, div } = TBD;

TBD.register('Root', {
	actions: [],
	render: function(state, props, actions){
		return div(
			{}, // styles
			{}, // attrs
			[
				// children
			]
		);
	}
});

TBD.mount('Root', 'root');
