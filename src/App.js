import React from 'react';

import { useUsersQuery } from './services/User/userApi';
import UserForm from './components/Forms/UserForm/UserForm';

const App = () => {
  const {
    data, error, isLoading, isFetching, isSuccess,
  } = useUsersQuery();

  return (
    <div>
      <UserForm />
      {isLoading && <h2>Loading...</h2>}
      {isFetching && <h2>Fetching...</h2>}
      {error && <h2>Error...</h2>}
      {isSuccess
      // eslint-disable-next-line no-console
      && console.log(data)}
    </div>

  );
};

export default App;
