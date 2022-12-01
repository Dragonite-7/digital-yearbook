const pool = require('../data/db');

const yearbookController = {};

yearbookController.getYearbooksByUser = async (_, args, ...other) => {
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
    return res.rows;
  } catch (err) {
    console.error(err);
  }
};

yearbookController.createYearbook = async (_, args, ...other) => {
  console.log(args);
  const { year, yearbook_name, join_code, user_id, color } = args.input;
  const params = [year, yearbook_name, join_code, color];
  console.log(params);
  const query = `
  INSERT INTO YEARBOOKS (year, yearbook_name, join_code, color) VALUES($1, $2, $3, $4)
  returning *
  `;
  const res = await pool.query(query, params);
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

yearbookController.joinYearbook = async (_, args, ...other) => {
  const { join_code, user_id } = args.input;
  const params = [join_code];
  const query = `
  SELECT yearbook_id, yearbook_name FROM yearbooks
  WHERE join_code = $1;
  `;
  console.log(params);
  const res = await pool.query(query, params);

  const params2 = [res.rows[0].yearbook_id, user_id];
  const query2 = `
  INSERT INTO YEARBOOK_USER (yearbook_id, user_id, admin) VALUES ($1, $2, FALSE)
  returning *
  `;
  console.log(params2);
  await pool.query(query2, params2);
  return res.rows[0];
};

module.exports = yearbookController;
