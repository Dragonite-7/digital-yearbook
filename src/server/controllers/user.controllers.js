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

userController.findUserByUsername = async (_, args, ...other) => {
  console.log(args);
  console.log(args.username);
  const params = [args.username];
  const query = 'SELECT * FROM users WHERE username = $1';

  try {
    const res = await pool.query(query, params);
    console.log('res user-->', res.rows);
    return res.rows[0];
  } catch (err) {
    console.error(err);
  }
};

userController.getUsersFromUsersTable = async (req, res, next) => {
  const query = `
    SELECT * FROM users;
    `;
  await pool.query(query, params);
};
// userController.getUsers = async (req, res, next) => {
//   const usersFromUsersTable = await userController.getUsersFromUsersTable();
//   res.locals.users = usersFromUsersTable;
//   return next();
// };

// userController.readQuery = async (query) => {
//   try {
//     const res = await pool.query(query);
//     return res.rows;
//   } catch (err) {
//     console.error(err);
//   }
// };

module.exports = userController;
