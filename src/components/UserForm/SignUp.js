import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { logIn, setUsername, setToken } from '../../features/User/userSlice';

import { useSignUpUserMutation } from '../../services/User/userApi';
import useField from '../useField';

const SignUpForm = ({ username, password }) => {
  const [signUpUser] = useSignUpUserMutation();
  const retypePassword = useField('password');

  const dispatch = useDispatch();

  const [isUsernameEmpty, setIsUsernameEmpty] = useState(false);
  const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);
  const [isRetypePasswordEmpty, setIsRetypePasswordEmpty] = useState(false);
  const [isUsernameTaken, setIsUsernameTaken] = useState(false);

  const handleSumbit = async (event) => {
    event.preventDefault();

    if (username.value.length === 0) {
      setIsUsernameEmpty(true);
    } else {
      setIsUsernameEmpty(false);
    }

    if (password.value.length === 0) {
      setIsPasswordEmpty(true);
    } else {
      setIsPasswordEmpty(false);
    }

    if (retypePassword.value.length === 0) {
      setIsRetypePasswordEmpty(true);
    } else {
      setIsRetypePasswordEmpty(false);
    }

    if (username.value.length > 0 && password.value.length > 0 && retypePassword.value.length) {
      if (password.value !== retypePassword.value) {
        setIsPasswordEmpty(true);
        setIsRetypePasswordEmpty(true);
      } else {
        const res = await signUpUser({
          username: username.value,
          password: password.value,
        });

        if (!res.error) {
          setIsUsernameTaken(false);
          dispatch(logIn());
          dispatch(setUsername(username.value));
          dispatch(setToken(res.data.token));
          username.setValue('');
          password.setValue('');
          retypePassword.setValue('');
        } else {
          setIsUsernameTaken(true);
        }
      }
    }
  };

  return (
    <div>
      <h1 className="text-xl font-bold text-gray-900">Sign Up</h1>
      <form>
        <div className="m-2 mt-4 text-gray-800 focus:border-gray-900" required>Create Username</div>
        <input
          type={username.type}
          value={username.value}
          onChange={username.onChange}
          className={!isUsernameEmpty ? 'border-solid border-gray-400 border-2 p-1 px-2 rounded-md outline-indigo-500' : 'border-solid border-red-400 border-2 p-1 px-2 rounded-md outline-red-400'}
        />
        <div className="m-2 mt-4 text-gray-800 focus:border-gray-900">Create Password</div>
        <input
          type={password.type}
          value={password.value}
          onChange={password.onChange}
          className={!isPasswordEmpty ? 'border-solid border-gray-400 border-2 p-1 px-2 rounded-md outline-indigo-500' : 'border-solid border-red-400 border-2 p-1 px-2 rounded-md outline-red-400'}
        />
        <div className="m-2 mt-4 text-gray-800 focus:border-gray-900">Retype Password</div>
        <input
          type={retypePassword.type}
          value={retypePassword.value}
          onChange={retypePassword.onChange}
          className={!isRetypePasswordEmpty ? 'border-solid border-gray-400 border-2 p-1 px-2 rounded-md outline-indigo-500' : 'border-solid border-red-400 border-2 p-1 px-2 rounded-md outline-red-400'}
        />
        <input
          type="submit"
          className="absolute top-0 invisible"
          onClick={handleSumbit}
        />
        { isUsernameEmpty || isPasswordEmpty || isRetypePasswordEmpty ? <div className="text-red-400 mt-4">All fields must be filled</div> : null }
        { !isUsernameEmpty && !isPasswordEmpty && !isRetypePasswordEmpty && password.value !== retypePassword.value ? <div className="text-red-400 mt-4">Passwords must match</div> : null }
        { !isUsernameTaken ? null : <div className="text-red-400 mt-4">Username is taken</div>}
      </form>
    </div>

  );
};

export default SignUpForm;
