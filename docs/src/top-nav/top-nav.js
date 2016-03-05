import TBD from "TBD";

const { register } = TBD;
const { nav, div, ul, li, span } = TBD.dom;
const styles = {
	navStyles: {
		width: '100%',
		height: '55px',
		backgroundColor: '#505050',
		display: 'flex',
		flexDirection: 'row',
		boxShadow: '0px 2px 4px #101010',
		zIndex: 5,
		position: 'fixed'
	},
	logoStyles: {
		width: '125px',
		height: '55px',
		lineHeight: '55px',
		paddingLeft: '15px',
		flex: 1,
		color: 'white'
	},
	navListStyles: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'nowrap'
	},
	navListItemStyles: {
		listStyleType: 'none',
		minWidth: '125px',
		textAlign: 'center',
		color: 'white'
	}
};

let TopNav = TBD.register('TopNav', {
	render: function(state, props, actions) {
		// TODO: this puts a ton of calls on stack?
		return (
			nav(styles.navStyles, {}, [
				div(styles.logoStyles, {}, [span({paddingLeft: '15px'}, {}, 'tbdJS')]),
				ul(styles.navListStyles, {}, [
					li(styles.navListItemStyles, {}, [span({}, {}, 'About')]),
					li(styles.navListItemStyles, {}, [span({}, {}, 'Docs'),]),
					li(styles.navListItemStyles, {}, [span({}, {}, 'Blog'),]),
					li(styles.navListItemStyles, {}, [span({}, {}, 'Contribute')])
				]),
				span({display: 'flex', flex: '1'}),
			])
		);
	}
});

export default TopNav;
