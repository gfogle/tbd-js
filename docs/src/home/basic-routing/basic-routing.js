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
		flexDirection: 'column',
		overflowX: 'auto'
	}
};
const strings = {
	simple: 'Basic Routing?',
	simpleSubheader: 'Routing by components is simple too. Let\'s refactor our basic component:',
	simpleNavigation: 'Then, assume we have a navbar it would look something like: '
};

function buildBasic() {
	return (
`
import TBD from "TBD"; // import top-level namespace
import Home from "./home/home"; // moving that top-level Home component into separate file

// built-in router takes a config array of route objects of:
//
// 1. the url aka window.location.pathname
// 2. the logical name of the route
// 3. the name of the component that you want to mount
//
TBD.router.config([
	{
		url: '/',
		name: 'Home',
		component: 'Home'
	},
	{
		url: '/about',
		name: 'About',
		component: 'About'
	}
]);

// now just initially mount and the getCurrentRoute() on initial load
// will be whatever route you configured with the '/' url
TBD.mount(
	TBD.router.currentRoute(),
	'root'
);`
	);
}

function buildBasicNav() {
	return (
`
import TBD from "TBD";

const { nav, div, ul, li, span } = TBD.dom;
const styles = {
	... cropped for example ...
};

let TopNav = TBD.register('TopNav', {
  render: function(state, props, actions) {
    return (
      nav({}, {}, [
        div({}, {
          onclick: (event) => { TBD.router.route('Home'); } // add a callback to the onclick event handler
        }, [ span({paddingLeft: '15px'}, {}, 'tbdJS') ]),
        ul({}, {}, [
          li({}, {
            onclick: (event) => { TBD.router.route('About'); } // add a callback to the onclick event handler
          }, [span({}, {}, 'About')])
        ]),
        span({display: 'flex', flex: '1'}),
      ])
    );
  }
});

export default TopNav;`
	);
}

let BasicRouting = TBD.register('BasicRouting', {
	render: function render(state, props, actions) {
		return (
			div({}, {}, [
				h2(styles.simpleHeader, {}, strings.simple),
				p(styles.simpleSubheader, {}, strings.simpleSubheader),
				div(styles.basicContainer, {}, [
					pre(styles.basicComponent, {}, buildBasic())
				]),
				p(styles.simpleSubheader, {}, strings.simpleNavigation),
				div(styles.basicContainer, {}, [
					pre(styles.basicComponent, {}, buildBasicNav())
				]),
			])
		);
	}
});

export default BasicRouting;
