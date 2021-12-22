import express from 'express';
import pool from '../database/db.js';

const app = express();

// CREATE
app.post('/users/create', async (req, res) => {
  const { userId, username, password } = req.body;

  try {
    const user = await pool.query('INSERT INTO users (user_id, username, password) VALUES ($1, $2, $3)', [userId, username, password]);
    res.json(user.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// READ
app.get('/users', async (req, res) => {
  try {
    const users = await pool.query('SELECT * FROM users');
    res.json(users.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.get('/users/:id', async (req, res) => {
  const id = parseInt(req.params.id, 10);

  try {
    const user = await pool.query('SELECT * FROM users WHERE user_id = $1', [id]);
    res.json(user.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// UPDATE
app.put('/users/update/:id', async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const { username } = req.body;

  try {
    const user = await pool.query('UPDATE users SET username = $1 WHERE user_id = $2', [username, id]);
    res.json(user);
  } catch (err) {
    console.error(err.message);
  }
});

// DELETE
app.delete('/users/delete/:id', async (req, res) => {
  const id = parseInt(req.params.id, 10);

  try {
    const user = await pool.query('DELETE FROM users WHERE user_id = $1', [id]);
    res.json(user);
  } catch (err) {
    console.error(err.message);
  }
});

export default app;
