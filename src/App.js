import React from 'react';

import UserForm from './components/UserForm/UserForm';
import MessageForm from './components/MessageForm/Message';

const App = () => (
  <div className="w-screen h-screen flex flex-col justify-center text-center items-center m-0 p-0 bg-slate-50">
    <UserForm />
    <MessageForm />
    <footer className="absolute p-1 px-4 bottom-0 w-screen bg-gray-900 text-indigo-500 text-sm flex justify-between">
      <a href="https://github.com/johnmarion1126/authentication" className="hover:opacity-70">
        johnmarion1126/messages
      </a>
      <a href="https://github.com/johnmarion1126" className="hover:opacity-70">Made By John</a>
    </footer>
  </div>

);

export default App;
