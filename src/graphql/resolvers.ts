const userController = require('../controllers/userController');
const yearbookController = require('../controllers/yearbookController');

const resolvers = {
  Query: {
    getAllUsers: userController.getAllUsers,
    getUsers: userController.getUsersByYearbook,
    getYearbooks: yearbookController.getYearbooksByUser,
    getUser: async (...args: any) => {
      if (args[1].username)
        return await userController.getUserByUsername(...args);
      else return await userController.getUserByUserId(...args);
    },
    getSignatures: yearbookController.getSignatures,
  },
  Mutation: {
    createUser: userController.createUser,
    createYearbook: yearbookController.createYearbook,
    joinYearbook: yearbookController.joinYearbook,
    createSignature: yearbookController.createSignature,
  },
};

export default resolvers;
