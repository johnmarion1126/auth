import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import uniqid from 'uniqid';

const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
  }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    users: builder.query({
      query: () => '/users',
      providesTags: ['User'],
    }),
    signUpUser: builder.mutation({
      query: ({ username, password }) => ({
        credentials: 'include',
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
        credentials: 'include',
        url: '/login',
        method: 'GET',
        redirect: 'follow',
        params: {
          username,
          password,
        },
      }),
    }),
    getSecretData: builder.query({
      query: () => ({
        credentials: 'include',
        url: '/secret',
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useUsersQuery,
  useSignUpUserMutation,
  useLazyGetSecretDataQuery,
  useLazyLogInUserQuery,
} = userApi;
export default userApi;
