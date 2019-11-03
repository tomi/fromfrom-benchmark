import { from } from "fromfrom";
import * as _ from "lodash";
import { IBenchmark } from "../types";
import * as Enumerable from "linq-es2015";

export const filterSortTake: IBenchmark = {
  native: data => {
    const filtered = data.filter(u => u.country === "FI");

    filtered.sort((a, b) => a.score - b.score);

    return filtered.slice(0, 10);
  },

  fromfrom: data =>
    from(data)
      .filter(u => u.country === "FI")
      .sortByDescending(u => u.score)
      .take(10)
      .toArray(),

  lodash: data =>
    _.chain(data)
      .filter(u => u.country === "FI")
      .sortBy(u => -u.score)
      .take(10)
      .value(),

  "linq-es2015": data =>
    Enumerable.asEnumerable(data)
      .Where(u => u.country === "FI")
      .OrderByDescending(u => u.score)
      .Take(10)
      .ToArray()
};
