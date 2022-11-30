const userController = require('../server/controllers/user.controllers');

const resolvers = {
  Query: {
    getUsers: userController.getAllUsers,
    getUser: userController.getUserByUsername,
    getYearbooks: userController.getYearbooksByUser,
  },
  Mutation: {
    createUser: userController.createUser,
    createYearbook: userController.createYearbook,
  },
};

export {};
module.exports = resolvers;
