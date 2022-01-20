import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import SecretData from '../SecretData/SecretData';

const AuthroziedButton = () => {
  const { isLoggedIn, token } = useSelector((state) => state.user);
  const [secretData, setSecretData] = useState([]);

  const handleButtonClick = async () => {
    if (!isLoggedIn) return;
    setSecretData([token]);
  };
  return (
    <>
      <button type="button" className={!isLoggedIn ? 'border-2 border-gray-400 px-6 py-2 rounded-md mt-6 text-white bg-gray-400' : 'border-2 border-indigo-500 px-6 py-2 rounded-md mt-6 text-white bg-indigo-500'} onClick={handleButtonClick}>Press Me</button>
      {
        secretData.map((val) => (<SecretData token={val} />))
      }
    </>

  );
};

export default AuthroziedButton;
