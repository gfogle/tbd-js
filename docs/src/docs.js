import TBD from "TBD";
import TopNav from "./top-nav/top-nav";

const { register, mount } = TBD;
const { div, nav, ul, li, span } = TBD.dom;
const styles = {
	divStyles: {
		position: 'absolute',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
		backgroundColor: '#303030',
		invalid: 'fails?',
		borderRadius: 'abc'
	},
};

TBD.register('Root', {
	render: function(state, props, actions) {
		// TODO: this puts a ton of calls on stack?
		return (
			div(styles.divStyles, {}, [
				TopNav()
			])
		);
	}
});

TBD.mount('Root', 'root');
