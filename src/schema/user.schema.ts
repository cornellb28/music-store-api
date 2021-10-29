import { object, string, TypeOf } from "zod";

// Let's create the Users schema to to show if the data passed in is vbalid or not. this fn. will let us know visually
// THIS SHOULD MATCH THE OBJECT OF THE BODY SENT FROM USER
export const createUserSchema = object({
  body: object({
    name: string({
      required_error: "name is required",
    }),
    password: string({
      required_error: "Password is required",
    }).min(10, "Password to short - should be 10 characters minimum"),
    passwordConfirmation: string({
      required_error: "Password Confirmation is required",
    }),
    email: string({
      required_error: "Email is required",
    }).email("Not a valid email"),
  }).refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords do not match",
    path: ["passwordConfirmation"],
  }),
});

// Now we can use this to send back the data checking the follow:
// Check if name was added
// check if email is valid etc. the @ exists
// check if the pass vs passCom matches
// ok -> this wont be execute any of them
// error -> user didnt follow requirements
// remove passCom b/c this is only for us to view. user only needs to access his match
export type CreateUserInput = Omit<TypeOf<typeof createUserSchema>, "body.passwordConfirmation">;
