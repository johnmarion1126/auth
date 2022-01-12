import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sayHello } from '../../../features/User/userSlice';

import useField from '../useField';
import SignUpForm from './SignUp';
import LogInForm from './LogInForm';

const UserForm = () => {
  const username = useField('username');
  const password = useField('password');
  const [isNewUser, setIsNewUser] = useState('SignUp');

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // eslint-disable-next-line no-console
  console.log(user);

  return (
    <>
      {
        isNewUser === 'SignUp'
          ? <LogInForm username={username} password={password} />
          : <SignUpForm username={username} password={password} />
      }
      <button type="button" onClick={() => { setIsNewUser('SignUp'); }}>Sign In</button>
      <button type="button" onClick={() => { setIsNewUser('LogIn'); }}>Log In</button>

      <button
        type="button"
        onClick={() => dispatch(sayHello('HEYYO'))}
      >
        Click Me
      </button>
    </>
  );
};

export default UserForm;
