import { FindManyOptions, getManager } from "typeorm";
import { UserDB } from "../db/models/User";

export type userGetArgs = {
  id: number
};

const get = (args: userGetArgs) => getManager().getRepository(UserDB).findOne(args.id);

const getMany = (args?: FindManyOptions) => getManager().getRepository(UserDB).find(args);

export type userCreateArgs = Pick<UserDB, "email" | "password" >;

const create = (args: userCreateArgs) => getManager().save(
    new UserDB(args.email, args.password)
  ).then(user => user);


export const userService = {
  get: get,
  getMany: getMany,
  create: create
}