import { from } from "fromfrom";
import * as _ from "lodash";
import { IBenchmark } from "../types";
import * as Enumerable from "linq-es2015";

export const groupByAndSort: IBenchmark = {
  native: data => {
    const grouped = data.reduce((acc, u) => {
      acc[u.country] = acc[u.country] || [];

      acc[u.country].push(u);

      return acc;
    }, {});

    Object.keys(grouped).forEach(key => {
      grouped[key].sort((a, b) => b.score - a.score);
    });

    return grouped;
  },

  fromfrom: data =>
    from(data)
      .groupBy("country")
      .toObject(
        group => group.key,
        group =>
          from(group.items)
            .sortByDescending(user => user.score)
            .toArray()
      ),

  lodash: data =>
    _.chain(data)
      .groupBy("country")
      .mapValues(items => _.sortBy(items, user => -user.score))
      .value(),

  "linq-es2015": data =>
    Enumerable.asEnumerable(data)
      .GroupBy(u => u.country)
      .Aggregate({} as any, (all, u) => {
        all[u.key] = Enumerable.asEnumerable(u)
          .OrderByDescending(u => u.score)
          .ToArray();

        return all;
      })
};
