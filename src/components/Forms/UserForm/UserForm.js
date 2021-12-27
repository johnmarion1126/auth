import React, { useState } from 'react';

const UserForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isNewUser, setIsNewUser] = useState('SignIn');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUsername('');
    setPassword('');
  };

  return (
    <>
      {
        isNewUser === 'SignIn' ? 'Sign In' : 'Log In'
      }
      <form>
        <div>Username</div>
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
        />
        <div>Password</div>
        <input
          type="text"
          value={password}
          onChange={handlePasswordChange}
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
