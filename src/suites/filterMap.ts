import { from } from "fromfrom";
import * as _ from "lodash";
import { IBenchmark } from "../types";
import * as Enumerable from "linq-es2015";

export const filterMap: IBenchmark = {
  native: data =>
    data
      .filter(u => u.score > 2000)
      .map(u => `${u.title} ${u.firstName} ${u.lastName} has score ${u.score}`),

  fromfrom: data =>
    from(data)
      .filter(u => u.score > 2000)
      .map(u => `${u.title} ${u.firstName} ${u.lastName} has score ${u.score}`)
      .toArray(),

  lodash: data =>
    _.chain(data)
      .filter(u => u.score > 2000)
      .map(u => `${u.title} ${u.firstName} ${u.lastName} has score ${u.score}`)
      .value(),

    "linq-es2015": data =>
      Enumerable.asEnumerable(data)
        .Where(u => u.score > 2000)
        .Select(u => `${u.title} ${u.firstName} ${u.lastName} has score ${u.score}`)
        .ToArray()
};
