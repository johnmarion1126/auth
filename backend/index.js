import express from 'express';
import cors from 'cors';
import pg from 'pg';

import config from './utils/config.js';

const app = express();
const corsOptions = { origin: config.URL || '*' };

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
  } else {
    console.log(`connected to PostgreSQL on port ${config.PORT}`);
  }
});

app.use(cors(corsOptions));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>');
});

app.get('/users', async (req, res) => {
  try {
    const allUsers = await pool.query('SELECT * FROM users');
    res.json(allUsers.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// TODO: MOVE ROUTES INTO ROUTES FOLDER
// TODO: CONNECT MIDDLEWARE
