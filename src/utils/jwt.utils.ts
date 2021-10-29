import jwt from "jsonwebtoken";
import config from "config";

// Grab the keys from config
const privateKey = config.get<string>("privateKey");
const publicKey = config.get<string>("publicKey");

// signJwt takes the object: payload, and options:

export function signJwt(object: Object, options?: jwt.SignOptions | undefined) {
  return jwt.sign(object, privateKey, {
    ...(options && options), // check if the options is defined else undefined
    algorithm: "RS256", // this allows us to use the keys
  });
}

// this verifies the token created
export function verifyJwt(token: string) {
  try {
    // the Jwt can be decoded. Let's GOOOO
    const decoded = jwt.verify(token, publicKey);
    return {
      valid: true,
      expired: false,
      decoded,
    };
  } catch (error: any) {
    console.log("e: ", error);
    // token could not be verified
    return {
      valid: false,
      expired: error.message === "jwt expired",
      decoded: null,
    };
  }
}
