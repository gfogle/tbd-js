import TBD from "TBD";

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
		color: 'white',
		cursor: 'pointer'
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
		color: 'white',
		cursor: 'pointer'
	}
};

function route(name) {
	TBD.router.route(name);
}

let TopNav = TBD.register('TopNav', {
	render: function(state, props, actions) {
		return (
			nav(styles.navStyles, {}, [
				div(styles.logoStyles, {
					onclick: (event) => { route('Home'); }
				}, [span({paddingLeft: '15px'}, {}, 'tbdJS')]),
				ul(styles.navListStyles, {}, [
					li(styles.navListItemStyles, {
						onclick: (event) => { route('About'); }
					}, [span({}, {}, 'About')]),
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
