import React, { useState } from 'react';

import useField from '../useField';

const SignUpForm = ({ username, password }) => {
  const retypePassword = useField('password');

  const [isUsernameEmpty, setIsUsernameEmpty] = useState(false);
  const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);
  const [isRetypePasswordEmpty, setIsRetypePasswordEmpty] = useState(false);

  const handleSumbit = (event) => {
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
        username.setValue('');
        password.setValue('');
        retypePassword.setValue('');
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
      </form>
    </div>

  );
};

export default SignUpForm;
