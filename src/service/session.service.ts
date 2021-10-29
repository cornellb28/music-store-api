import { FilterQuery } from "mongoose";
import SessionModel, { SchemaDocument } from "../models/session.model";

// passes in the userId and the useAgent they are on
// wel will then create an object with userId and userAgent
export async function createSession(userId: string, userAgent: string) {
  const session = await SessionModel.create({ user: userId, userAgent });
  return session.toJSON();
}

export async function findSessions(query: FilterQuery<SchemaDocument>) {
  // this will return the the plain object -> no fn.
  return SessionModel.find(query).lean();
}
