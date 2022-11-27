
import _, { omit } from 'lodash';
import { excludedToClientFields } from '../constants/exclude.constants';
import { CreateUserInput } from '../schema/user.schema';
const bcrypt = require('bcrypt');
// import { signJwt } from '../utils/jwt.utils';

export const createUser = async (
  input: CreateUserInput['body']
) => {
  try {

    console.log('input-->', input)

    if(input){
      const sqlQuery = `INSERT INTO public.users
      (username,password,display_name,picture_url)
      VALUES ($1, $2, $3, NULL) 
      RETURNING *;`
    }
  } catch (e: any) {
    throw new Error(e);
  }
};

