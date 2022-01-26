import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { logOut, setUsername } from '../../features/User/userSlice';
import { useLazyLogOutUserQuery } from '../../services/User/userApi';

import ButtonImage from '../../assets/button.PNG';

const Home = () => {
  const username = useSelector((state) => state.user.username);
  const [trigger] = useLazyLogOutUserQuery();
  const dispatch = useDispatch();

  const handleLogOut = async () => {
    trigger();
    dispatch(logOut());
    dispatch(setUsername(''));
  };

  return (
    <section className="flex flex-col justify-center items-center w-full h-full text-gray-700">
      <h1 className="text-xl font-bold">
        Hello
        <span className="text-indigo-500">
          {' '}
          {username}
        </span>
      </h1>
      <p className="text-gray-700">
        You can now press the button
        <br />
        in all of its glory!!!
      </p>
      <img
        src={ButtonImage}
        alt="guy giving thumbs up"
        className="w-[225px] my-4 border-2 border-solid border-gray-100 rounded-md"
      />
      <button type="button" className="text-gray-400 hover:text-gray-700 hover:cursor-pointer" onClick={handleLogOut}>Log Out</button>
    </section>

  );
};

export default Home;
