import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { pool } from '../database/db.js';
import config from '../utils/config.js';

const logInUser = async (req, res) => {
  const { username, password } = req.body;

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

    const token = jwt.sign(userToken, config.SECRET);

    res.status(200).send({ token });
  } catch (err) {
    console.error(err.message);
  }
};

const signUpUser = async (req, res) => {
  const { userId, username, password } = req.body;

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);

  try {
    const user = await pool.query('INSERT INTO users (user_id, username, password) VALUES ($1, $2, $3)', [userId, username, passwordHash]);

    const userToken = {
      username: user.username,
    };

    const token = jwt.sign(userToken, config.SECRET);

    res.status(200).send({ token });
  } catch (err) {
    console.error(err.message);
  }
};

export default {
  logInUser,
  signUpUser,
};
