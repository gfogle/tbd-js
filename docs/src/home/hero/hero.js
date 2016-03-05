import TBD from "TBD";

const { register } = TBD;
const { div, span, button } = TBD.dom;
const styles = {
	heroContainer: {
		width: '100%'
	},
	heroStyles: {
		backgroundColor: '#FFD86E',
		background: 'linear-gradient(#404040, #707070)',
		minHeight: '300px',
		marginTop: '55px',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center'
	},
	titleStyles: {
		fontSize: '44px',
		color: 'white'
	},
	subtitleStyles: {
		fontSize: '18px',
		color: 'white',
		fontWeight: '300'
	},
	subtitleActionStyles: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'nowrap',
		paddingTop: '30px'
	},
	getStartedStyles: {
		minWidth: '100px',
		height: '50px',
		fontSize: '16px',
		cursor: 'pointer',
		borderRadius: '2px',
		border: 'none',
		boxShadow: '1px 2px 2px #101010',
		backgroundColor: '#ffffff',
		padding: '0 15px',
		outline: 'none'
	}
};
const strings = {
	title: 'tbdJS',
	subtitle: 'A JS FRAMEWORK FOR VIEWS, ROUTING, AND OTHER NON-TRIVIAL THINGS',
	getStarted: 'Get Started'
};

let HomeHero = TBD.register('HomeHero', {
	render: function(state, props, actions) {
		return (
			div(styles.heroContainer, {}, [
				div(styles.heroStyles, {}, [
					span(styles.titleStyles,{}, strings.title),
					span(styles.subtitleStyles, {}, strings.subtitle),
					div(styles.subtitleActionStyles, {}, [
						button(styles.getStartedStyles, {}, strings.getStarted)
					])
				])
			])
		);
	}
});

export default HomeHero;
