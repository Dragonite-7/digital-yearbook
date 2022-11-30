const userController = require('../server/controllers/user.controllers');

const resolvers = {
  Query: {
    getUsers: userController.getUsersFromUsersTable,
    getUser: userController.findUserByUsername,
  },
  Mutation: {
    createUser: userController.createUser,
  },
};

export {};
module.exports = resolvers;
