import React from 'react';

const LogInForm = ({ username, password }) => (
  <div>
    <h1 className="text-2xl font-bold">Log In</h1>
    <form>
      <div className="m-2 mt-4">Username</div>
      <input
        type={username.type}
        value={username.value}
        onChange={username.onChange}
        className="border-solid border-gray-400 border-2 p-1 px-2"
      />
      <div className="m-2 mt-4">Password</div>
      <input
        type={password.type}
        value={password.value}
        onChange={password.onChange}
        className="border-solid border-gray-400 border-2 p-1 px-2"
      />
    </form>
  </div>
);

export default LogInForm;
