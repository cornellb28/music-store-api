import { omit } from "lodash";
import { DocumentDefinition } from "mongoose";
import UserModel, { UserDocument } from "../models/user.model";

// We will pass in the req.body to compare it to the UserDocument in user.model
// we pass in the user.model to let typescript know what the schema should look like
// we will omit "createdAt" | "updatedAt" | "comparePassword" as we on need that. User doesn't
export async function createUser(
  input: DocumentDefinition<
    Omit<UserDocument, "createdAt" | "updatedAt" | "comparePassword">
  >
) {
  try {
    const user = await UserModel.create(input);

    return omit(user.toJSON(), "password");
  } catch (error: any) {
    throw new Error(error);
  }
}

// need to validate the password
// takes email and password
export async function validatePassword({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  // lets find the email that matches
  const user = await UserModel.findOne({ email });

  // if user doesnt exist
  if (!user) {
    return false;
  }
  // we found it. lets comparePasswords
  const isValid = await user.comparePassword(password);
  if (!isValid) return false;
  // omit the user password
  return omit(user.toJSON(), "password");
}
