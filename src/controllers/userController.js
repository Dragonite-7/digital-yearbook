const pool = require('../data/db');

const userController = {};

userController.createUser = async (_, args, ...other) => {
  console.log(args);
  const { username, password, display_name, picture_url } = args.input;
  const params = [username, password, display_name, picture_url];
  console.log(params);
  const query =
    'INSERT INTO users (username, password, display_name, picture_url) VALUES($1, $2, $3, $4)';
  await pool.query(query, params);
};

userController.getUserByUsername = async (_, args, ...other) => {
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
userController.getUserByUserId = async (_, args, ...other) => {
  console.log('args!', args);
  console.log(args.user_id);
  const params = [args.user_id];
  const query = 'SELECT * FROM users WHERE user_id = $1';

  try {
    const res = await pool.query(query, params);
    console.log('res user-->', res.rows);
    return res.rows[0];
  } catch (err) {
    console.error(err);
  }
};

userController.getAllUsers = async (_, args, ...other) => {
  const query = `
    SELECT * FROM users;
    `;
  const res = await pool.query(query);
  return res.rows;
};

userController.getUsersByYearbook = async (_, args, ...other) => {
  const { yearbook_id } = args;
  const params = [yearbook_id];
  const query = `
  SELECT display_name FROM users
  WHERE user_id in (
    SELECT user_id FROM yearbook_user WHERE yearbook_id = $1
  );
  `;
  const res = await pool.query(query, params);

  console.log('res user-->', res.rows);
  return res.rows;
};

module.exports = userController;
