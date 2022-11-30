const { Pool } = require('pg');
require('dotenv').config();

const URI =
  'postgres://ejakuqrk:Kx2IoWceaooLd-5jjG0E_dAf6Aw7JxjG@peanut.db.elephantsql.com/ejakuqrk';
const pool = new Pool({
  connectionString: URI,
});
module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};
