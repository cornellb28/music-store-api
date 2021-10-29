import { object, string } from "zod";

// checks to make sure the email & password is valid
export const createSessionSchema = object({
  body: object({
    email: string({
      required_error: "Email is required",
    }),
    password: string({
      required_error: "Password is required",
    }),
  }),
});
