import express from 'express';
import cors from 'cors';
import config from './utils/config.js';
import route from './routes/userRoutes.js';
import { unknownEndpoint, errorHandler } from './utils/middleware.js';

const app = express();
const corsOptions = { origin: config.URL || '*' };

app.use(cors(corsOptions));
app.use(express.json());

app.use(route);

app.use(unknownEndpoint);
app.use(errorHandler);

app.listen(config.PORT, () => {
  console.log(`listening on port ${config.PORT}`);
});

// TODO: CREATE TESTS
