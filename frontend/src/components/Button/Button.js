import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useLazyGetSecretDataQuery } from '../../services/User/userApi';

const AuthroziedButton = () => {
  const [authStatus, setAuthStatus] = useState(null);
  const { isLoggedIn } = useSelector((state) => state.user);
  const [trigger] = useLazyGetSecretDataQuery();

  const handleButtonClick = async () => {
    if (!isLoggedIn) return;
    const test = await trigger();
    setAuthStatus(test.data.result);
  };

  return (
    <>
      <button type="button" className={!isLoggedIn ? 'border-2 border-gray-400 px-6 py-2 rounded-md mt-6 text-white bg-gray-400' : 'border-2 border-indigo-500 px-6 py-2 rounded-md mt-6 text-white bg-indigo-500 hover:opacity-70'} onClick={handleButtonClick}>Press Me</button>
      {
        authStatus ? <div className="text-gray-700 mt-4">{authStatus}</div> : null
      }
    </>

  );
};

export default AuthroziedButton;
