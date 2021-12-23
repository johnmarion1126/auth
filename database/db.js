import pg from 'pg';
import config from '../utils/config.js';

const pool = new pg.Pool({
  user: config.DB_USER,
  password: config.DB_PASSWORD,
  host: config.DB_HOST,
  database: config.DB_DATABASE,
  port: config.DB_PORT,
});

pool.connect((err) => {
  if (err) {
    console.error('error connecting to PostgreSQL', err.stack);
  }
});

export default pool;
