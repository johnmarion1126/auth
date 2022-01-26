import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { pool } from '../database/db.js';
import config from '../utils/config.js';

const logInUser = async (req, res) => {
  if (req.query.username === undefined || req.query.password === undefined) return;
  const { username, password } = req.query;

  try {
    const user = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
    const userData = user.rows;

    const isPasswordCorrect = user === null
      ? false
      : await bcrypt.compare(password, userData[0].password);

    if (!(user && isPasswordCorrect)) {
      return res.status(401).json({
        error: 'Invalid username or password',
      });
    }

    const userToken = {
      username,
    };

    const token = jwt.sign(userToken, config.SECRET, { expiresIn: 30 });

    res.cookie('secretToken', token, {
      'max-age': 30,
      httpOnly: true,
      secure: false,
      SameSite: 'none',
    });
    res.cookie('username', username);
    res.status(200).send();
  } catch (err) {
    console.error(err.message);
  }
};

const logOutUser = async (req, res) => {
  res.clearCookie('secretToken');
  res.clearCookie('username');
  res.status(200).send();
};

const signUpUser = async (req, res) => {
  const { userId, username, password } = req.body;

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);

  try {
    const returnUser = await pool.query('SELECT * FROM users WHERE username = $1', [username]);

    if (returnUser.rows.length > 0) {
      return res.status(400).json();
    }

    const user = await pool.query('INSERT INTO users (user_id, username, password) VALUES ($1, $2, $3)', [userId, username, passwordHash]);

    const userToken = {
      username: user.username,
    };

    const token = jwt.sign(userToken, config.SECRET, { expiresIn: 30 });

    res.cookie('secretToken', token, {
      'max-age': 30,
      httpOnly: true,
      secure: false,
      SameSite: 'none',
    });
    res.cookie('username', user.username);
    res.status(200).json();
  } catch (err) {
    console.error(err.message);
  }
};

const returnSecretData = async (req, res) => {
  const { secretToken } = req.cookies;
  if (!secretToken) return res.json({ result: 'Missing token' });

  try {
    jwt.verify(secretToken, config.SECRET);

    res.json({
      result: 'The button has been pressed!',
    });
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      res.clearCookie('username');
      res.clearCookie('secretToken');
      return res.json({ result: 'Invalid token' });
    }
    return res.json({ result: 'Something went wrong...' });
  }
};

const checkIfAuthorized = async (req, res) => {
  const { secretToken, username } = req.cookies;
  if (!secretToken) return res.json({ error: 'No token' });

  try {
    jwt.verify(secretToken, config.SECRET);
    const user = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
    res.status(200).json(user.rows);
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      res.clearCookie('username');
      res.clearCookie('secretToken');
      return res.json({ error: 'Invalid token' });
    }
    return res.json({ error: 'Something went wrong...' });
  }
};

export default {
  logInUser,
  logOutUser,
  signUpUser,
  returnSecretData,
  checkIfAuthorized,
};
