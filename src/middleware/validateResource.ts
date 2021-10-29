import { Request, Response, NextFunction } from "express";
import { AnyZodObject } from "zod";

// When a request comes in, provide a schema and validate the schema (validates the data passed)
// curry function below passing 2 args arg1: what is the data
const validate =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body, // the body or data {name: 'LL Cool J', type: 'Lyrcist', albums: 10}
        // If I pass some query parameters to http://myserver.com/api/user?name="LL Cool J", req.query will be { name: 'LL Cool J' }
        query: req.query,
        params: req.params, // the id
      });
      //continue on to the next phase
      next();
    } catch (error: any) {
      // something went wrong
      return res.status(400).send(error.errors);
    }
  };

export default validate;
