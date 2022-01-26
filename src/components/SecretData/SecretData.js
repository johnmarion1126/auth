import React from 'react';

import { useGetSecretDataQuery } from '../../services/User/userApi';

const SecretData = () => {
  const { data, error, isLoading } = useGetSecretDataQuery();

  return (
    <div className="text-gray-700 mt-4">
      { isLoading && <div>Loading...</div>}
      { error && <div>Error...</div>}
      { data && <div>{data.result}</div>}
    </div>
  );
};

export default SecretData;