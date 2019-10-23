export type Country = "FI" | "SE" | "NO" | "DK" | "IS";

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  title: string;
  email: string;
  country: Country;
  score: number;
}

export type BenchmarkRun = (data: IUser[]) => void;

export interface IBenchmark {
  fromfrom: BenchmarkRun;
  lodash: BenchmarkRun;
  native: BenchmarkRun;
}
