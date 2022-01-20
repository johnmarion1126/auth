import React from 'react';

import { useSelector } from 'react-redux';

import Home from './components/Home/Home';
import UserForm from './components/UserForm/UserForm';
import AuthroziedButton from './components/Button/Button';

const App = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return (
    <div className="w-screen h-screen flex flex-col justify-center text-center items-center m-0 p-0 bg-slate-50">
      <div className="border-2 border-solid border-gray-900 py-10 px-14 md:px-20 rounded-md filter bg-white min-h-[55%]">
        { !isLoggedIn
          ? <UserForm />
          : <Home />}
      </div>
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
