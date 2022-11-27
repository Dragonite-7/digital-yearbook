import { Pool } from 'pg';
require('dotenv').config();

export const pool = new Pool({
  user: process.env.DB_USER,
  host:'localhost', 
  database: 'digitalYearBook',
  password : process.env.DB_PASSWORD,
  port: 5432
})