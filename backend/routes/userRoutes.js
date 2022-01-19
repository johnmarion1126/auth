import express from 'express';
import userAPI from '../controllers/userControllers.js';
import loginUser from '../controllers/loginController.js';

const app = express();

app.get('/users', userAPI.getAllUsers);
app.get('/users/:id', userAPI.getUser);
app.post('/users', userAPI.createUser);
app.put('/users/:id', userAPI.updateUser);
app.delete('/users/:id', userAPI.deleteUser);

app.get('/login', loginUser);

export default app;
