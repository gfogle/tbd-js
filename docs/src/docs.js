import TBD from "TBD";
import TopNav from "./top-nav/top-nav";

const { register, mount } = TBD;
const { div, nav, ul, li, span, button } = TBD.dom;
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

TBD.register('Root', {
	render: function(state, props, actions) {
		// TODO: this puts a ton of calls on stack?
		return (
			div(styles.divStyles, {}, [
				TopNav(),
				div(styles.heroStyles, {}, [
					span(styles.titleStyles,{}, 'tbdJS'),
					span(styles.subtitleStyles, {}, 'A JS FRAMEWORK FOR VIEWS, ROUTING, AND OTHER NONTRIVIAL THINGS'),
					div(styles.subtitleActionStyles, {}, [
						button(styles.getStartedStyles, {}, 'Get Started')
					])
				])
			])
		);
	}
});

TBD.mount('Root', 'root');
