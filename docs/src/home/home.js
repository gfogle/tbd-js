import TBD from "TBD";
import HomeHero from "./hero/hero";
import HomeFeatures from "./features/features";
import BasicFeatures from "./basics/basics";

const { div, h2, hr, p, code, pre } = TBD.dom;
const styles = {
	container: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	homeContent: {
		display: 'flex',
		flexDirection: 'column',
		maxWidth: '90%',
		borderRadius: '2px',
		boxShadow: '1px 2px 2px #101010',
		marginTop: '45px',
		backgroundColor: '#ffffff',
		padding: '15px',
		justifyContent: 'center'
	},
	spacer: {
		margin: '15px 0',
		flex: '1',
		height: '0',
		width: '100%',
		border: 'none',
		borderBottom: 'solid 1px #c0c0c0'
	}
};
const strings = {
};

let Home = TBD.register('Home', {
	render: function render(state, props, actions) {
		return (
			div(styles.container, {}, [
				HomeHero(),
				div(styles.homeContent, {}, [
					HomeFeatures(),
					hr(styles.spacer),
					BasicFeatures()
				])
			])
		);
	}
});

export default Home;
