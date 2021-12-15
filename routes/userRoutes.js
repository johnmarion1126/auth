import express from 'express';
import pool from '../database/db.js';

const app = express();

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

export default app;
