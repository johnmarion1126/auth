import supertest from 'supertest';
import 'regenerator-runtime';
import { pool } from '../database/db.js';
import app from '../app';

const api = supertest(app);

describe('API Calls', () => {
  test('a valid user can be added', async () => {
    const newUser = {
      userId: 1,
      username: 'testusername',
      password: 'testpassword',
    };

    const users = await api.get('/users');
    const usersLength = users.body.length;

    await api
      .post('/users/create')
      .send(newUser)
      .expect(200)
      .expect('Content-Type', /application\/json/);

    const newUsers = await api.get('/users');
    const newUsersLength = newUsers.body.length;

    expect(newUsersLength).toEqual(usersLength + 1);
  });

  test('users are returned as json', async () => {
    await api
      .get('/users')
      .expect(200)
      .expect('Content-Type', /application\/json/);
  }, 10000);

  test('a specific user can be viewed', async () => {
    const resultUser = await api
      .get('/users/1')
      .expect(200)
      .expect('Content-Type', /application\/json/);

    const resultUsername = resultUser.body[0].username;

    expect(resultUsername).toEqual('testusername');
  });

  test(' a user can be updated', async () => {
    const updatedUser = {
      password: 'newpassword',
    };

    await api
      .put('/users/update/1')
      .send(updatedUser)
      .expect(200)
      .expect('Content-Type', /application\/json/);

    const user = await api.get('/users/1');

    const resultPassword = user.body[0].password;

    expect(resultPassword).toEqual('newpassword');
  });
});

test('a user can be deleted', async () => {
  const users = await api.get('/users');
  const usersLength = users.body.length;

  await api
    .delete('/users/delete/1')
    .expect(200);

  const newUsers = await api.get('/users');
  const newUsersLength = newUsers.body.length;

  expect(newUsersLength).toEqual(usersLength - 1);
});

afterAll(() => {
  pool.end();
});
