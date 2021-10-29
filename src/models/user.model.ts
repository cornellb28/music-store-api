import mongoose from "mongoose";
import bcrypt from "bcrypt"; // hash users password
import config from "config";

// Typescript Definition for UserSchema
// this is waht the data should look like
export interface UserDocument extends mongoose.Document {
  email: string;
  name: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  comparePassword(userPassword: string): Promise<Boolean>;
}

// Schema Definition
// when passed in, it should have these requirements
const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

// When we CREATE a user we want to take their successful password & runnit throught a hash algorithm and send the hash to password 
// password = coco -> hash(password) -> #hash# = hdyhdjlsilkeimim -> 
userSchema.pre("save", async function (next) {
  // lets model the schema with the UserDocument 
  let user = this as UserDocument;

  // if pre-save doesnt modify the password
  if (!user.isModified("password")) {
    return next();
  }

  // password has been modified
  const salt = await bcrypt.genSalt(config.get<number>("saltWorkFactor"));
  const hash = bcrypt.hashSync(user.password, salt);
  user.password = hash;
  return next();
});

// comparePassword to make sure both match returns as Promise:Boolean
userSchema.methods.comparePassword = async function (
  userPassword: string
): Promise<Boolean> {
  let user = this as UserDocument;

  return bcrypt
    .compare(userPassword, user.password)
    .catch((error) => false);
};

// Model reads the schema
const UserModel = mongoose.model<UserDocument>("User", userSchema);

export default UserModel;
