import { Request, Response } from "express";
import config from "config";
import { createSession, findSessions } from "../service/session.service";
import { validatePassword } from "../service/user.service";
import { signJwt } from "../utils/jwt.utils";

export async function createUserSessionHandler(req: Request, res: Response) {
  // validate the users password
  const user = await validatePassword(req.body);

  if (!user) {
    return res.status(401).send("invalid email or password");
  }

  // lets stripe the object to string
  const userId = `${user._id.valueOf()}`;

  // create a session
  const session = await createSession(user._id, req.get("user-agent") || "");

  // create an access token
  // grabs the whole payload, and add session id
  const accessToken = signJwt(
    { ...user, session: session._id },
    { expiresIn: config.get("accessTokenTtl") } // 15 min
  );

  console.log("ac", accessToken);

  // create a refresh token
  const refreshToken = signJwt(
    { ...user, session: session._id },
    { expiresIn: config.get("refreshTokenTtl") } // 1 year
  );
  // send access & refresh token to
  return res.send({ accessToken, refreshToken });
}

// This will get the user id so we can get their existing session
export async function getUserSessionsHandler(req: Request, res: Response) {
  const userId = res.locals.user._id;

  console.log(res);

  const sessions = await findSessions({ user: userId, valid: true });
  console.log({ sessions });
  return res.send(sessions);
}
