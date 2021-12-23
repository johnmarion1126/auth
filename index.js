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

// FIX TESTS
// https://fullstackopen.com/en/part4/testing_the_backend
// https://github.com/FullStack-HY/part3-notes-backend/tree/part4-4
