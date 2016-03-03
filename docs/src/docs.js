import TBD from "TBD";

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
	navStyles: {
		width: '100%',
		height: '55px',
		backgroundColor: '#FFCF4B',
		display: 'flex',
		flexDirection: 'row',
		boxShadow: '0px 2px 4px #101010'
	},
	logoStyles: {
		width: '125px',
		height: '55px',
		lineHeight: '55px',
		paddingLeft: '15px',
		flex: 1
	},
	navListStyles: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'nowrap'
	},
	navListItemStyles: {
		listStyleType: 'none',
		minWidth: '125px',
		textAlign: 'center'
	}
};

TBD.register('Root', {
	render: function(state, props, actions) {
		// TODO: this puts a ton of calls on stack?
		return (
			div(styles.divStyles, {}, [
				nav(styles.navStyles, {}, [
					div(styles.logoStyles, {}, [span({paddingLeft: '15px'}, {}, 'tbdJS')]),
					ul(styles.navListStyles, {}, [
						li(styles.navListItemStyles, {}, [span({}, {}, 'About')]),
						li(styles.navListItemStyles, {}, [span({}, {}, 'Features')]),
						li(styles.navListItemStyles, {}, [span({}, {}, 'Docs'),]),
						li(styles.navListItemStyles, {}, [span({}, {}, 'Contribute')])
					]),
					span({display: 'flex', flex: '1'}),
				])
			])
		);
	}
});

TBD.mount('Root', 'root');
