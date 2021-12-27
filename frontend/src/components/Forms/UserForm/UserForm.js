import React, { useState } from 'react';

import useField from '../useField';

const UserForm = () => {
  const username = useField('username');
  const password = useField('password');
  const [isNewUser, setIsNewUser] = useState('SignIn');

  const handleSubmit = (event) => {
    event.preventDefault();
    // eslint-disable-next-line no-console
    console.log(`Username: ${username.value}`);
    // eslint-disable-next-line no-console
    console.log(`Password: ${password.value}`);
    username.value = '';
    password.value = '';
  };

  return (
    <>
      {
        isNewUser === 'SignIn' ? 'Sign In' : 'Log In'
      }
      <form>
        <div>Username</div>
        <input
          type={username.type}
          value={username.value}
          onChange={username.onChange}
        />
        <div>Password</div>
        <input
          type={password.type}
          value={password.value}
          onChange={password.onChange}
        />
        <button
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
      <button type="button" onClick={() => { setIsNewUser('SignIn'); }}>Sign In</button>
      <button type="button" onClick={() => { setIsNewUser('LogIn'); }}>Log In</button>
    </>
  );
};

export default UserForm;

// TODO: Finish user form
// https://fullstackopen.com/en/part1/a_more_complex_state_debugging_react_apps
// https://fullstackopen.com/en/part1/component_state_event_handlers#event-handling
// https://fullstackopen.com/en/part7/custom_hooks#hooks
