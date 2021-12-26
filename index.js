import config from './utils/config.js';
import { connectToDatabase } from './database/db.js';
import app from './app.js';

const start = async () => {
  await connectToDatabase();
  app.listen(config.PORT, () => {
    console.log(`listening on port ${config.PORT}`);
  });
};

start();
