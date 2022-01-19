import React, { useState } from 'react';

import useField from '../useField';
import SignUpForm from './SignUp';
import LogInForm from './LogInForm';

const UserForm = () => {
  const username = useField('username');
  const password = useField('password');
  const [isNewUser, setIsNewUser] = useState('SignUp');

  return (
    <div className="border-2 border-solid border-gray-900 py-10 px-14 md:px-20 rounded-md filter bg-white">
      <h1 className="text-lg mb-4 text-indigo-500 font-bold">Authorization</h1>
      {
        isNewUser === 'LogIn'
          ? <LogInForm username={username} password={password} />
          : <SignUpForm username={username} password={password} />
      }
      <div className="mt-6">
        <button className={isNewUser === 'SignUp' ? 'm-2  mx-4 font-semibold hover:opacity-70 text-indigo-500' : 'm-2 mx-4 font-semibold hover:opacity-70 text-gray-400'} type="button" onClick={() => { setIsNewUser('SignUp'); }}>Sign Up</button>
        <button className={isNewUser === 'LogIn' ? 'm-2 mx-4 font-semibold hover:opacity-70 text-indigo-500' : 'm-2 mx-4 font-semibold hover:opacity-70 text-gray-400'} type="button" onClick={() => { setIsNewUser('LogIn'); }}>Log In</button>
      </div>
    </div>
  );
};

export default UserForm;
