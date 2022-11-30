const pool = require('../data/db');

const userController = {};

userController.createUser = async (_, args, ...other) => {
  console.log(args);
  const { username, password, display_name, picture_url } = args.input;
  const params = [username, password, display_name, picture_url];
  console.log(params);
  const query = {
    text: 'INSERT INTO users (username, password, display_name, picture_url) VALUES($1, $2, $3, $4)',
    values: [username, password, display_name, picture_url],
  };
  await pool.query(query, params);
};

const findUserByEmail = async (email) => {
  const query = {
    text: 'SELECT * FROM users WHERE email = $1',
    values: [email],
  };

  try {
    const res = await pool.query(query);
    console.log('res email-->', res);
    return res.rows;
  } catch (err) {
    console.error(err);
  }
  return [
    {
      id: '0',
      name: 'J Doe',
      email: 'jdoe@zcorp.com',
      password: 'passwordz',
    },
  ];
};

userController.readQuery = async (query) => {
  try {
    const res = await pool.query(query);
    return res.rows;
  } catch (err) {
    console.error(err);
  }
};

userController.getUsersFromUsersTable = async (req, res, next) => {
  const query = `
    SELECT * FROM users;
    `;

  return userController.readQuery(query);
};
userController.getUsers = async (req, res, next) => {
  const usersFromUsersTable = await userController.getUsersFromUsersTable();
  res.locals.users = usersFromUsersTable;
  return next();
};

module.exports = userController;
