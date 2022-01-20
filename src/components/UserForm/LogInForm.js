import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { logIn, setUsername, setToken } from '../../features/User/userSlice';
import { useLazyLogInUserQuery } from '../../services/User/userApi';

const LogInForm = ({ username, password }) => {
  const [isUsernameEmpty, setIsUsernameEmpty] = useState(false);
  const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);
  const [isWrongInfo, setIsWrongInfo] = useState(false);
  const [trigger] = useLazyLogInUserQuery();

  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
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

    if (username.value.length > 0 && password.value.length > 0) {
      const res = await trigger({
        username: username.value,
        password: password.value,
      });
      if (!res.error) {
        setIsWrongInfo(false);
        dispatch(logIn());
        dispatch(setUsername(username.value));
        dispatch(setToken(res.data.token));
        username.setValue('');
        password.setValue('');
      } else {
        setIsWrongInfo(true);
      }
    }
  };
  return (
    <div>
      <h1 className="text-xl font-bold text-gray-900">Log In</h1>
      <form>
        <div className="m-2 mt-4 text-gray-800">Username</div>
        <input
          type={username.type}
          value={username.value}
          onChange={username.onChange}
          className={!isUsernameEmpty ? 'border-solid border-gray-400 border-2 p-1 px-2 rounded-md outline-indigo-500' : 'border-solid border-red-400 border-2 p-1 px-2 rounded-sm outline-red-400'}
        />
        <div className="m-2 mt-4 text-gray-800">Password</div>
        <input
          type={password.type}
          value={password.value}
          onChange={password.onChange}
          className={!isPasswordEmpty ? 'border-solid border-gray-400 border-2 p-1 px-2 rounded-md outline-indigo-500' : 'border-solid border-red-400 border-2 p-1 px-2 rounded-md outline-red-400'}
        />
        { isUsernameEmpty || isPasswordEmpty ? <div className="text-red-400 mt-4">All fields must be filled</div> : null}
        { isWrongInfo ? <div className="text-red-400 mt-4">Wrong credentials</div> : null}
        <input
          type="submit"
          className="absolute top-0 invisible"
          onClick={handleSubmit}
        />
      </form>
    </div>

  );
};

export default LogInForm;
