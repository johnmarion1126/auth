import React from 'react';

import { useSelector } from 'react-redux';
import ButtonImage from '../../assets/button.PNG';

const Home = () => {
  const username = useSelector((state) => state.user.username);

  return (
    <section className="flex flex-col justify-center items-center w-full h-full text-gray-700">
      <h1 className="text-xl font-bold">
        Hello
        <span className="text-indigo-500">
          {' '}
          {username}
        </span>
      </h1>
      <p text-gray-400>
        You can now press the button
        <br />
        in all of its glory!!!
      </p>
      <img
        src={ButtonImage}
        alt="guy giving thumbs up"
        className="w-[225px] my-4 border-2 border-solid border-gray-100 rounded-md"
      />
    </section>

  );
};

export default Home;
