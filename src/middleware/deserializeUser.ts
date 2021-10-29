import { NextFunction, Request, Response } from "express";
import { get } from "lodash";
import { verifyJwt } from "../utils/jwt.utils";

// we want to accessToken and remove the Bearer
// We want to add the user to the req.body
const deserializeUser = (req: Request, res: Response, next: NextFunction) => {
  // We need to get our accessToken from the req header
  const accessToken = get(req, "headers.authorization", "").replace(
    /^Bearer\s/,
    ""
  );

  if (!accessToken) {
    return next();
  }

  const { decoded, expired } = verifyJwt(accessToken);
  if (decoded) {
    res.locals.user = decoded;
    return next();
  }

  return next();
};

export default deserializeUser;
