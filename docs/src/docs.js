import TBD from "TBD";
import Home from "./home/home";
import About from "./about/about";

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
