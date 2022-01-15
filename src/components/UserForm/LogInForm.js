import React from 'react';

const LogInForm = ({ username, password }) => (
  <div>
    <h1 className="text-xl font-bold text-gray-900">Log In</h1>
    <form>
      <div className="m-2 mt-4 text-gray-800">Username</div>
      <input
        type={username.type}
        value={username.value}
        onChange={username.onChange}
        className="border-solid border-gray-400 border-2 p-1 px-2 focus:border-gray-900 rounded-md"
      />
      <div className="m-2 mt-4 text-gray-800">Password</div>
      <input
        type={password.type}
        value={password.value}
        onChange={password.onChange}
        className="border-solid border-gray-400 border-2 p-1 px-2 focus:border-gray-900 rounded-md"
      />
      <input type="submit" className="absolute top-0 invisible" />
    </form>
  </div>
);

export default LogInForm;
