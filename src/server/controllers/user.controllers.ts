import { NextFunction, Request, Response } from 'express';
import { omit } from 'lodash';
import { CreateUserInput } from '../schema/user.schema';
import { excludedToClientFields } from '../constants/exclude.constants';
import { createUser } from '../services/user.service';
import logger from '../utils/logger';


export const createUserHandler = async (
  req: Request<{}, {}, CreateUserInput['body']>,
  res: Response
) => {
  try {
    const user = await createUser(req.body);
    return res.send(omit(user.toJSON(), excludedToClientFields));
  } catch (e: any) {
    logger.error(e);
    return res.status(409).send(e.message);
  }
}

