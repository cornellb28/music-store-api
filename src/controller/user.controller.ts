import { Request, Response } from "express";
import logger from "../utils/logger";
import { createUser } from "../service/user.service";
import { CreateUserInput } from "../schema/user.schema";
import { omit } from "lodash";

// it gets the data posted in from CreateUserInput and sent to createUser fn.
export async function createUserHandler(
  // meaning <{params}, {req.body}, Schema['body]>
  req: Request<{}, {}, CreateUserInput["body"]>,
  res: Response
) {
  try {
    // sending the users input to the fn. to sort out the info
    const user = await createUser(req.body); // call to create user service
    //console.log(user)
    // just removes the password from the user return. but still in the database
    return res.send(omit(user, ["password"]));
  } catch (error: any) {
    // log my error message
    logger.error(error);
    // 409 means conflict -> voilated unique test returned false
    return res.status(409).send(error.message);
  }
}
