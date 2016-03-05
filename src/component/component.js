import helpers from "../helpers/helpers";
import perf from "../perf/perf";

export default function Component(name, defn) {
	this.id = helpers.guid();
	this.name = name;
	this.render = __DEV__ ? perf.instrument(name + "__render", defn.render) : defn.render;
};
