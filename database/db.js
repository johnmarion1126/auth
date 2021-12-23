import pg from 'pg';
import config from '../utils/config.js';

const pool = new pg.Pool({
  user: config.DB_USER,
  password: config.DB_PASSWORD,
  host: config.DB_HOST,
  database: config.DB_DATABASE,
  port: config.DB_PORT,
});

const connectToDatabase = async () => {
  try {
    await pool.connect();
    console.log('database connected');
  } catch (err) {
    console.log('connecting to database failed');
    return process.exit(1);
  }

  return null;
};

export { connectToDatabase, pool };
