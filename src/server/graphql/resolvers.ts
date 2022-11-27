

import {getUsers} from '../controllers/user.controllers';


export const resolvers = {
  Query: {
    users: async () => getUsers(),
  },
};