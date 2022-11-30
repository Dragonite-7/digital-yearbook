const userController = require('../server/controllers/user.controllers');

const resolvers = {
  Query: {
    getUsers: userController.getUsersFromUsersTable,
  },
  Mutation: {
    createUser: userController.createUser,
  },
};

export {};
module.exports = resolvers;
