import helpers from "../helpers/helpers";
import perf from "../perf/perf";

var listeners = {};

function subscribe(eventName, cb) {
	var uid = helpers.guid();

	if (!listeners[eventName]) {
		listeners[eventName] = [];
	}

	listeners[eventName].push({
		id: uid,
		cb: cb
	});

	return {id: uid, name: eventName};
}

function publish(eventName, args) {
	if (listeners[eventName]) {
		listeners[eventName].forEach((listener) => {
			listener.cb(args);
		});
	}
}

function unsubscribe(eventObj) {
	listeners[eventObj.name].some((listener, index) => {
		if (listener.id === eventObj.id) {
			listeners[eventObj.name].splice(index, 1);
			return true;
		}

		return false;
	});
}

module.exports = {
	subscribe: __DEV__ ? perf.instrument('events::subscribe', subscribe) : subscribe,
	publish: __DEV__ ? perf.instrument('events::publish', publish) : publish,
	unsubscribe: __DEV__ ? perf.instrument('events::unsubscribe', unsubscribe) : unsubscribe
};
