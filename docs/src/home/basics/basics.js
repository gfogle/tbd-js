import TBD from "TBD";

const { div, h2, hr, p, code, pre } = TBD.dom;
const styles = {
	simpleHeader: {
		textAlign: 'center',
		fontWeight: '500'
	},
	simpleSubheader: {
		textAlign: 'center'
	},
	basicContainer: {
		borderRadius: '2px',
		backgroundColor: '#e0e0e0',
		padding: '15px',
		border: 'solid 1px #c0c0c0'
	},
	basicComponent: {
		display: 'flex',
		flexDirection: 'column'
	}
};
const strings = {
	simple: 'Building Simple Components',
	simpleSubheader: 'Simple components, i.e. display-only components are super simple:'
};

function buildBasic() {
	return (
`
import TBD from "TBD"; // import top-level namespace

// destructure various dom functions from TBD.dom
const { div, nav, ul, li, span, button } = TBD.dom;

// optionally, create inline styles objects... you can choose to use CSS
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

// register a named-component, and give it an object definition
TBD.register('Home', {
	// components take a render function that will return constructed HTML
	render: function(state, props, actions) {
		return (
			div(styles.divStyles, {}, [
				label({}, {}, 'Hello World')
			])
		);
	}
});

// mount a named component as the top-most level component
// with a 2nd argument of 'root' which is the #id in your index.html
TBD.mount('Home', 'root');`
	);
}

let BasicFeatures = TBD.register('BasicFeatures', {
	render: function render(state, props, actions) {
		return (
			div({}, {}, [
				h2(styles.simpleHeader, {}, strings.simple),
				p(styles.simpleSubheader, {}, strings.simpleSubheader),
				div(styles.basicContainer, {}, [
					pre(styles.basicComponent, {}, buildBasic())
				])
			])
		);
	}
});

export default BasicFeatures;
