const { Pool } = require('pg');
require('dotenv').config();

// const pool = new Pool({
// user: process.env.DB_USER,
// host:'localhost', 
// database: 'digitalYearBook',
// password : process.env.DB_PASSWORD,
// port: 5432,
//   connectionString: process.env.DATABASE_URL
// })
// const URI = 'postgres://postgres:meowmerry03@localhost:5432/digitalYearBook?sslmode=disable'
const URI = 'postgres://ejakuqrk:Kx2IoWceaooLd-5jjG0E_dAf6Aw7JxjG@peanut.db.elephantsql.com/ejakuqrk'
const pool = new Pool({
  connectionString: URI
});
module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  }
};