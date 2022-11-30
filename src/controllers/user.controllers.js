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

userController.getAllUsers = async (req, res, next) => {
  const query = `
    SELECT * FROM users;
    `;
  await pool.query(query, params);
};

userController.createYearbook = async (_, args, ...other) => {
  console.log(args);
  const { year, yearbook_name, join_code, user_id } = args.input;
  const params = [year, yearbook_name, join_code];
  console.log(params);
  const query = `
  INSERT INTO YEARBOOKS (year, yearbook_name, join_code) VALUES($1, $2, $3)
  returning yearbook_id
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
  const res2 = await pool.query(query2, params2);
  return res2.rows[0];
};

module.exports = userController;
