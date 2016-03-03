let measurements = {};

// have to pass in the name because of anonymous functions
// see dom.js createValidTags method as an example where name
// of fn is undefined
function instrument(name, fn) {
	return function() {
		let start = performance.now();
		var result = fn.apply(this, arguments);
		let stop = performance.now();

		report(name, stop - start);
		return result;
	};
}

function report(name, amount) {
	if (!name.length) {
		console.warn('You\'re trying to report perf on an anonymous or unnamed fn');
		name = "???";
	}

	if (measurements[name]) {
		if (amount > measurements[name].max) { measurements[name].max = amount; }
		if (amount < measurements[name].min) { measurements[name].min = amount; }

		measurements[name].total += amount;
		measurements[name].count += 1;
	} else {
		measurements[name] = {
			min: amount,
			max: amount,
			total: amount,
			count: 1
		};
	}

	console.log("Current measures for: ", name, measurements[name]);
}

module.exports = {
	instrument: instrument
};
