import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import pool from './config/db.js';

const app = express();
const PORT = process.env.PORT || 4000;
const corsOptions = {origin: process.env.URL || '*'};

app.use(cors(corsOptions));
app.use(express.json());


app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>');
});

app.listen(PORT, () => {
    console.log(`Listen on the port ${PORT}...`);
});
