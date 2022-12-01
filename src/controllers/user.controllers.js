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

userController.getYearbooksByUser = async (_, args, ...other) => {
  console.log(args);
  console.log(args.user_id);
  const params = [args.user_id];
  const query = `
  SELECT * FROM yearbooks
  WHERE yearbook_id in (
    SELECT yearbook_id FROM yearbook_user
    WHERE user_id = $1
  )
  `;

  try {
    const res = await pool.query(query, params);
    console.log('res user-->', res.rows);
    return res.rows;
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

userController.createYearbook = async (_, args, ...other) => {
  console.log(args);
  const { year, yearbook_name, join_code, user_id, color } = args.input;
  const params = [year, yearbook_name, join_code, color];
  console.log(params);
  const query = `
  INSERT INTO YEARBOOKS (year, yearbook_name, join_code, color) VALUES($1, $2, $3, $4)
  returning *
  `;
  const res = await pool.query(query, params);
  console.log(res);
  const newYearbookId = res.rows[0].yearbook_id;
  console.log(newYearbookId);
  const params2 = [newYearbookId, user_id];
  const query2 = `
  INSERT INTO YEARBOOK_USER (yearbook_id, user_id, admin) VALUES ($1, $2, TRUE)
  returning *
  `;
  await pool.query(query2, params2);
  return res.rows[0];
};

module.exports = userController;
