import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// eslint-disable-next-line no-unused-vars
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
        withCredentials: true,
        credentials: 'include',
        url: '/signup',
        method: 'POST',
        mode: 'cors',
        body: {
          userId: uniqid(),
          username,
          password,
        },
      }),
    }),
    logInUser: builder.query({
      query: ({ username, password }) => ({
        withCredentials: true,
        credentials: 'include',
        url: '/login',
        method: 'GET',
        mode: 'cors',
        redirect: 'follow',
        params: {
          username,
          password,
        },
      }),
    }),
    getSecretData: builder.query({
      query: () => ({
        withCredentials: true,
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
