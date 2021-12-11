import dotenv from 'dotenv';
dotenv.config();

import express from "express";
const app = express();

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
    res.send("<h1>Hello World!</h1>");
});

app.listen(PORT, () => {
    console.log(`Listen on the port ${PORT}...`);
});