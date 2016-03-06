import TBD from "TBD";
import Home from "./home/home";
import About from "./about/about";

const { div, nav, ul, li, span, button } = TBD.dom;
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

TBD.mount(
	TBD.router.currentRoute(),
	'root'
);
