import TBD from "TBD";
import HomeHero from "./hero/hero";

const { register } = TBD;
const { div, span, button, h4, p, hr } = TBD.dom;
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
	features: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		minHeight: '150px'
	},
	feature: {
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'nowrap',
		textAlign: 'center',
		padding: '10px',
		flex: '1',
		maxWidth: '225px',
		minWidth: '225px'
	},
	featureHeader: {
		fontWeight: '500',
		fontSize: '18px',
		marginBottom: '5px',
		fontSize: '20px'
	},
	featureParagraph: {
		marginTop: '5px',
		fontSize: '14px'
	},
	spacer: {
		margin: '15px 0',
		flex: '1',
		height: '0',
		width: '100%',
		border: 'none',
		borderBottom: 'solid 1px #101010'
	}
};
const strings = {
	more: 'MORE THAN A UI',
	moreDescription: 'UI libraries are great, but there\'s more to it: routing, pages, ajax, etc...',
	patterns: 'CLEAR PATTERNS',
	patternsDescription: 'And with all those concepts comes a need for clearly-defined patterns...',
	performance: '#PERFMATTERS',
	performanceDescription: 'Patterns can sacrifice performance. But they don\'t have to'
};

let Home = TBD.register('Home', {
	render: function(state, props, actions) {
		return (
			div(styles.container, {}, [
				HomeHero(),
				div(styles.homeContent, {}, [
					div(styles.features, {}, [
						div(styles.feature, {}, [
							h4(styles.featureHeader, {}, strings.more),
							p(styles.featureParagraph, {}, strings.moreDescription)
						]),
						div(styles.feature, {}, [
							h4(styles.featureHeader, {}, strings.patterns),
							p(styles.featureParagraph, {}, strings.patternsDescription)
						]),
						div(styles.feature, {}, [
							h4(styles.featureHeader, {}, strings.performance),
							p(styles.featureParagraph, {}, strings.performanceDescription)
						]),

					]),
					hr(styles.spacer)
				])
			])
		);
	}
});

export default Home;
