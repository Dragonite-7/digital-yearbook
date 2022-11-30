const userController = require("../server/controllers/user.controllers");
const pool = require('../server/data/db');
import { v4 as uuidv4 } from 'uuid';

const resolvers = {
  Query: {
    getUsers: async () => await userController.getUsersFromUsersTable(),
  },
  Mutation : {
    createUser: async(req:any) => {
      console.log('req -->', req.body)
      const {username,password,display_name, picture_url} = req.body;
      const query = {
        text: 'INSERT INTO users(username,password, display_name,  picture_url) VALUES($1, $2, $3, $4)',
        values: [username,password, display_name, picture_url],
      };
      const response = await pool.query(query,[uuidv4(),username,password, display_name, picture_url]);
      console.log('response-->', response)
      return response // 'Successfully created!';
    }
  }
};
// export default resolvers;
module.exports = resolvers