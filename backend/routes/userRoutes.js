import express from 'express';
import userAPI from '../controllers/userControllers.js';
import authAPI from '../controllers/authController.js';

const app = express();

app.get('/users', userAPI.getAllUsers);
app.get('/users/:id', userAPI.getUser);
app.post('/users', userAPI.createUser);
app.put('/users/:id', userAPI.updateUser);
app.delete('/users/:id', userAPI.deleteUser);

app.get('/login', authAPI.logInUser);
app.get('/logout', authAPI.logOutUser);
app.post('/signup', authAPI.signUpUser);
app.get('/secret', authAPI.returnSecretData);
app.get('/authorize', authAPI.checkIfAuthorized);

export default app;
