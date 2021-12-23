import config from './utils/config.js';
import app from './app.js';

app.listen(config.PORT, () => {
  console.log(`listening on port ${config.PORT}`);
});

// FIX TESTS
// https://fullstackopen.com/en/part4/testing_the_backend
// https://github.com/FullStack-HY/part3-notes-backend/tree/part4-4
