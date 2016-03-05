import TBD from "TBD";

const { register } = TBD;
const { div, span, button, h4, p, hr } = TBD.dom;
const styles = {
	features: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		minHeight: '150px',
		justifyContent: 'center'
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

let HomeFeatures = TBD.register('HomeFeatures', {
	render: function render(state, props, actions) {
		return (
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
				])
			])
		);
	}
});

export default HomeFeatures;
