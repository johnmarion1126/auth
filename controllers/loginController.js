import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { pool } from '../database/db.js';
import config from '../utils/config.js';

const loginUser = async (req, res) => {
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

export default loginUser;
