import mongoose from "mongoose";
import { UserDocument } from "./user.model";

// This model will create a session model 
export interface SchemaDocument extends mongoose.Document {
  user: UserDocument["_id"];
  valid: boolean;
  userAgent: string;
  createdAt: Date;
  updatedAt: Date;
}

// creating the new Schema for sessions
const sessionSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // mongodb id it set for you referencing the user.model
    valid: { type: Boolean, default: true }, // true or false
    userAgent: { type: String },
  },
  {
    timestamps: true,
  }
);

const SessionModel = mongoose.model("Session", sessionSchema);

export default SessionModel;
