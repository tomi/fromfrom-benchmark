import * as Benchmark from "benchmark";
import { generateData } from "./generateData";
import { groupByAndSort } from "./suites/groupByAndSort";
import { filterSortTake } from "./suites/filterSortTake";
import { filterMap } from "./suites/filterMap";
import { toSet } from "./suites/toSet";

const HOW_MANY = 10000;

const data = generateData(HOW_MANY);

const benchmarks = {
  filterSortTake,
  groupByAndSort,
  filterMap,
  toSet
};

Object.entries(benchmarks).forEach(([name, benchmark]) => {
  console.log("Running", name);

  const suite = new Benchmark.Suite();

  Object.entries(benchmark).forEach(([name, runner]) => {
    suite.add(name, () => runner(data));
  });

  suite
    .on("cycle", function(event) {
      console.log(String(event.target));
    })
    .run({ async: false });
});
