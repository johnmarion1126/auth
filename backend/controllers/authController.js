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
      username: user.username,
    };

    const token = jwt.sign(userToken, config.SECRET, { expiresIn: 60 * 60 });

    res.cookie('token', token, {
      'max-age': 50,
      httpOnly: true,
      secure: false,
      SameSite: 'none',
    }).status(200).send();
  } catch (err) {
    console.error(err.message);
  }
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

    const token = jwt.sign(userToken, config.SECRET, { expiresIn: 60 * 60 });

    res.cookie('token', token, {
      'max-age': 50,
      httpOnly: true,
      secure: false,
      SameSite: 'none',
    }).status(200).json();
  } catch (err) {
    console.error(err.message);
  }
};

const returnSecretData = async (req, res) => {
  const { token } = req.cookies;
  if (!token) return res.status(401).json({ result: 'Missing token' });

  const decodedToken = jwt.verify(token, config.SECRET);

  if (!decodedToken.iat) {
    return res.status(401).json({ result: 'Invalid token' });
  }

  res.json({
    result: 'The button has been pressed!',
  });
};
export default {
  logInUser,
  signUpUser,
  returnSecretData,
};
