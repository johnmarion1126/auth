import React from 'react';

import { useSelector } from 'react-redux';

const AuthroziedButton = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return (
    <button type="button" className={!isLoggedIn ? 'border-2 border-gray-400 px-6 py-2 rounded-md mt-6 text-white bg-gray-400' : 'border-2 border-indigo-500 px-6 py-2 rounded-md mt-6 text-white bg-indigo-500'}>Press Me</button>

  );
};

export default AuthroziedButton;
