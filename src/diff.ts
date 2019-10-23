import * as snapshotDiff from "snapshot-diff";
import { IUser, IBenchmark } from "./types";

export const diff = (data: IUser[], benchmark: IBenchmark) => {
  const suiteNames = Object.keys(benchmark);
  const lhs = benchmark[suiteNames[0]](data);
  for (let i = 1; i < suiteNames.length; i++) {
    const rhs = benchmark[suiteNames[i]](data);
    const diff = snapshotDiff(lhs, rhs, { colors: true });
    if (!diff.includes("Compared values have no visual difference")) {
      console.log(
        `There's difference between ${suiteNames[0]} and ${suiteNames[i]}:`
      );
      console.log(diff);
    }
  }
};
