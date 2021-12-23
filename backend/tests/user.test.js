import supertest from 'supertest';
import 'regenerator-runtime';
import { pool } from '../database/db.js';
import app from '../app';

const api = supertest(app);

test('notes are returned as json', async () => {
  await api
    .get('/users')
    .expect(200)
    .expect('Content-Type', /application\/json/);
}, 10000);

afterAll(() => {
  pool.end();
});
