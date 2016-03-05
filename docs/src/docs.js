import TBD from "TBD";
import TopNav from "./top-nav/top-nav";
import Home from "./home/home";

const { div, nav, ul, li, span, button } = TBD.dom;
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

TBD.register('Root', {
	render: function(state, props, actions) {
		// TODO: this puts a ton of calls on stack?
		return (
			div(styles.divStyles, {}, [
				TopNav(),
				Home()
			])
		);
	}
});

TBD.mount('Root', 'root');
