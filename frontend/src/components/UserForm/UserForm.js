import React, { useState } from 'react';

import useField from '../useField';
import SignUpForm from './SignUp';
import LogInForm from './LogInForm';

const UserForm = () => {
  const username = useField('username');
  const password = useField('password');
  const [isNewUser, setIsNewUser] = useState('SignUp');

  return (
    <>
      <h1 className="text-3xl mb-4 text-indigo-500 font-bold">Auth</h1>
      <div>
        <button className={isNewUser === 'SignUp' ? 'm-2  mx-4 font-semibold hover:opacity-70 text-gray-900' : 'm-2 mx-4 font-semibold hover:opacity-70 text-gray-400'} type="button" onClick={() => { setIsNewUser('SignUp'); }}>Sign Up</button>
        <button className={isNewUser === 'LogIn' ? 'm-2 mx-4 font-semibold hover:opacity-70 text-gray-900' : 'm-2 mx-4 font-semibold hover:opacity-70 text-gray-400'} type="button" onClick={() => { setIsNewUser('LogIn'); }}>Log In</button>
      </div>
      {
        isNewUser === 'LogIn'
          ? <LogInForm username={username} password={password} />
          : <SignUpForm username={username} password={password} />
      }
    </>
  );
};

export default UserForm;
