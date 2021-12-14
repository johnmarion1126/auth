import dotenv from 'dotenv';
dotenv.config();

import pg from "pg";
const Pool = pg.Pool;

const pool = new Pool({
    user: "postgres", /*process.env.POSTGRES_USER,*/
    password: "password", /*process.env.POSTGRES_PASSWORD,*/
    host: "localhost", /*process.env.POSTGRES_HOST,*/
    database: "ideas", /*process.env.POSTGRES_DATABASE*/
    port: 5432 /*process.env.POSTGRES_PORT,*/
});

export default pool;
