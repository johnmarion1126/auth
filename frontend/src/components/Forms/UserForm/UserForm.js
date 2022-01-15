import React, { useState } from 'react';

import useField from '../useField';
import SignUpForm from './SignUp';
import LogInForm from './LogInForm';

const UserForm = () => {
  const username = useField('username');
  const password = useField('password');
  const [isNewUser, setIsNewUser] = useState('SignUp');

  return (
    <div className="border-2 border-solid border-black py-10 px-20 rounded-md">
      {
        isNewUser === 'LogIn'
          ? <LogInForm username={username} password={password} />
          : <SignUpForm username={username} password={password} />
      }
      <div className="mt-6">
        <button className="m-2  mx-4 font-semibold hover:opacity-70" type="button" onClick={() => { setIsNewUser('SignUp'); }}>Sign In</button>
        <button className="m-2 mx-4 font-semibold hover:opacity-70" type="button" onClick={() => { setIsNewUser('LogIn'); }}>Log In</button>
      </div>
    </div>
  );
};

export default UserForm;
