import express from 'express';
import userAPI from '../controllers/userControllers.js';

const app = express();

app.get('/users', userAPI.getAllUsers);
app.get('/users/:id', userAPI.getUser);
app.post('/users', userAPI.createUser);
app.put('/users/:id', userAPI.updateUser);
app.delete('/users/:id', userAPI.deleteUser);

export default app;
