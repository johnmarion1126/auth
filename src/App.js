import React, { useState } from 'react';

import Home from './components/Home/Home';
import UserForm from './components/UserForm/UserForm';
import AuthroziedButton from './components/Button/Button';

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className="w-screen h-screen flex flex-col justify-center text-center items-center m-0 p-0 bg-slate-50">
      { !isLoggedIn
        ? <UserForm />
        : <Home />}
      <AuthroziedButton />
      <footer className="absolute p-1 px-4 bottom-0 w-screen bg-gray-900 text-indigo-500 text-sm flex justify-between">
        <a href="https://github.com/johnmarion1126/authentication" className="hover:opacity-70">
          johnmarion1126/messages
        </a>
        <a href="https://github.com/johnmarion1126" className="hover:opacity-70">Made By John</a>
      </footer>
    </div>

  );
};

export default App;
