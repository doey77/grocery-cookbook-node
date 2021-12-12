import { FindManyOptions, getManager } from "typeorm";
import { UserDB } from "../db/models/User";
import { sign } from "jsonwebtoken";
import env from "../env";
import { RequestError } from "../misc/errors";

export type userGetArgs = {
  id: number
};

const get = (args: userGetArgs) => getManager().getRepository(UserDB).findOne(args.id);

const getMany = (args?: FindManyOptions) => getManager().getRepository(UserDB).find(args);

export type userCreateArgs = Pick<UserDB, "email" | "password" >;

// TODO encrypt passwords
const create = (args: userCreateArgs) => getManager().save(
    new UserDB(args.email, args.password)
  ).then(user => user);

export type userLoginArgs = {
  email: string,
  password: string,
}

const login = async (args: userLoginArgs) => {
  const userRepo = (await getManager().getRepository(UserDB).find({email:args.email}));

  if (userRepo.length === 1) {
    const user = userRepo[0];
    if (user.password === args.password) {
      return sign(user.email, env.authTokenSecret, {expiresIn: 3*86400});
    }
  }

  throw new RequestError(400,'Username or password was incorrect');
}


export const userService = {
  get: get,
  getMany: getMany,
  create: create,
  login: login
}