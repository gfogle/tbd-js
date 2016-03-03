let measurements = {};

// have to pass in the name because of anonymous functions
// see dom.js createValidTags() as an example where name of fn is undefined
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
		console.warn('You\'re trying to report perf on an anonymous or unnamed fn!'); //eslint-disable-line no-console
		name = "???";
	}

	amount = parseFloat(amount.toFixed(2));

	if (measurements[name]) {
		if (amount > measurements[name].max) { measurements[name].max = amount; }
		if (amount < measurements[name].min) { measurements[name].min = amount; }

		measurements[name].total = parseFloat((measurements[name].total + amount).toFixed(2));
		measurements[name].count += 1;
		measurements[name].avg = parseFloat((measurements[name].total / measurements[name].count).toFixed(2));
	} else {
		measurements[name] = {
			min: amount,
			max: amount,
			total: amount,
			avg: amount,
			count: 1
		};
	}
}

window.TBD_ReportPerf = () => {
	console.table(measurements); //eslint-disable-line no-console
};

module.exports = {
	instrument: instrument
};
