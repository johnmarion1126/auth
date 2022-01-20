import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// eslint-disable-next-line no-unused-vars
import uniqid from 'uniqid';

const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/',
  }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    users: builder.query({
      query: () => '/users',
      providesTags: ['User'],
    }),
    signUpUser: builder.mutation({
      query: ({ username, password }) => ({
        url: '/signup',
        method: 'POST',
        body: {
          userId: uniqid(),
          username,
          password,
        },
      }),
    }),
    logInUser: builder.query({
      query: ({ username, password }) => ({
        url: '/login',
        method: 'GET',
        params: {
          username,
          password,
        },
      }),
    }),
    getSecretData: builder.query({
      query: (token) => ({
        url: '/secret',
        method: 'GET',
        headers: {
          authorization: token,
        },
      }),
    }),
  }),
});

export const {
  useUsersQuery,
  useSignUpUserMutation,
  useGetSecretDataQuery,
  useLazyLogInUserQuery,
} = userApi;
export default userApi;
