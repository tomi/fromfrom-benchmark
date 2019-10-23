import * as faker from "faker";
import { Country, IUser } from "./types";

const countries = ["FI", "SE", "NO", "DK", "IS"] as Country[];

export const generateData = (howMany): IUser[] =>
  Array.from({ length: howMany }).map((_, id) => ({
    id,
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    title: faker.name.title(),
    email: faker.internet.email(),
    country: faker.random.arrayElement(countries),
    score: faker.random.number({ min: 1000, max: 10000 })
  }));
