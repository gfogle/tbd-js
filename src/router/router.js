import perf from "../perf/perf";
import events from "../events/events";

var routes = {};
var currentRoute;

function config(opts) {
	if (!Array.isArray(opts)) {
		throw new Error('You must pass an array of options to router.config');
	} else {
		opts.forEach(function(routeConfig) {
			if (window.location.pathname === routeConfig.url) {
				currentRoute = routeConfig.component;
			}

			routes[routeConfig.name] = {
				url: routeConfig.url,
				component: routeConfig.component
			};
		});
	}
}

function route(route) {
	if (routes[route] && currentRoute !== route) {
		currentRoute = route;
		window.hash = '#/' + route.toLowerCase();
		events.publish('routeChanged', route);
	}
}

function current() {
	return currentRoute;
}

module.exports = {
	config: __DEV__ ? perf.instrument('router::config', config) : config,
	route: __DEV__ ? perf.instrument('router::route', route) : route,
	currentRoute: __DEV__ ? perf.instrument('router::current', current) : current
};
