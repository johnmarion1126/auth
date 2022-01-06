import React from 'react';

const LogInForm = ({ username, password }) => (
  <div>
    Log In
    <form>
      <div className="underline">Username</div>
      <input
        type={username.type}
        value={username.value}
        onChange={username.onChange}
        className="border-solid border-black border-2"
      />
      <div className="underline">Password</div>
      <input
        type={password.type}
        value={password.value}
        onChange={password.onChange}
        className="border-solid border-black border-2"
      />
    </form>
  </div>
);

export default LogInForm;