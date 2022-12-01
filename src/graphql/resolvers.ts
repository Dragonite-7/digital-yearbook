const userController = require('../controllers/userController');
const yearbookController = require('../controllers/yearbookController');

const resolvers = {
  Query: {
    getUsers: userController.getAllUsers,
    getUser: userController.getUserByUsername,
    getYearbooks: yearbookController.getYearbooksByUser,
  },
  Mutation: {
    createUser: userController.createUser,
    createYearbook: yearbookController.createYearbook,
    joinYearbook: yearbookController.joinYearbook,
  },
};

export default resolvers;
