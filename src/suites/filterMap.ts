import { from } from "fromfrom";
import * as _ from "lodash";
import { IBenchmark } from "../types";

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
      .value()
};
