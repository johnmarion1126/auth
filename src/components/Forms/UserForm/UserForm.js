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
      {
        isNewUser === 'SignUp'
          ? <LogInForm username={username} password={password} />
          : <SignUpForm username={username} password={password} />
      }
      <button type="button" onClick={() => { setIsNewUser('SignUp'); }}>Sign In</button>
      <button type="button" onClick={() => { setIsNewUser('LogIn'); }}>Log In</button>
    </>
  );
};

export default UserForm;

// TODO: Finish user form
// https://fullstackopen.com/en/part1/a_more_complex_state_debugging_react_apps
// https://fullstackopen.com/en/part1/component_state_event_handlers#event-handling
// https://fullstackopen.com/en/part7/custom_hooks#hooks
