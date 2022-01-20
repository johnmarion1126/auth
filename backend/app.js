import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import config from './utils/config.js';
import route from './routes/userRoutes.js';
import { unknownEndpoint, errorHandler } from './utils/middleware.js';

const app = express();
const corsOptions = { origin: config.URL || '*' };

app.use(helmet());
app.use(cors(corsOptions));
app.use(express.json());

app.use(route);

app.use(unknownEndpoint);
app.use(errorHandler);

export default app;
