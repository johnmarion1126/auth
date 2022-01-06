import React from 'react';

const SignUpForm = ({ username, password }) => (
  <div>
    Sign Up
    <form>
      <div className="underline">Create username</div>
      <input
        type={username.type}
        value={username.value}
        onChange={username.onChange}
        className="border-solid border-black border-2"
      />
      <div className="underline">Create password</div>
      <input
        type={password.type}
        value={password.value}
        onChange={password.onChange}
        className="border-solid border-black border-2"
      />
    </form>
  </div>
);

export default SignUpForm;
