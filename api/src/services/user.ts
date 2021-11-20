import { User } from "../interfaces/User";

export type UserGetArgs = {
  id: number,
  name?: string
};

const get = (args: UserGetArgs): User => {
  return {
    id: args.id,
    email: "janedoe@example.com",
    name: args.name ?? "Jane Doe"
  }
}

export type userCreateArgs = Pick<User, "email" | "name">;

const create = (args: userCreateArgs): User => {
  return {
    id: Math.floor(Math.random() * 10000),
    ...args
  }
}

export const userService = {
  get: get,
  create: create
}