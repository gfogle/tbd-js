import TBD from "TBD";
import TopNav from "../top-nav/top-nav";

const { div } = TBD.dom;
const styles = {
	divStyles: {
		position: 'absolute',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
		backgroundColor: '#303030',
		overflowY: 'auto',
		paddingBottom: '45px'
	}
};

let About = TBD.register('About', {
	render: function(state, props, actions) {
		return (
			div(styles.divStyles, {}, [
				TopNav(),
				div({}, {}, 'About Page')
			])
		);
	}
});

module.exports = About;
