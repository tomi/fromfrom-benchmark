import { from } from "fromfrom";
import * as _ from "lodash";
import { IBenchmark } from "../types";
import * as Enumerable from "linq-es2015";

export const toSet: IBenchmark = {
  native: data => new Set(data.map(u => u.id)),

  fromfrom: data =>
    from(data)
      .pick("id")
      .toSet(),

  lodash: data =>
    new Set(
      _.chain(data)
        .map(u => u.id)
        .value()
    ),

  "linq-es2015": data =>
    new Set(
      Enumerable.asEnumerable(data)
        .Select(u => u.id)
        .ToArray()
    )
};
