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
  }),
});

export const {
  useUsersQuery,
  useSignUpUserMutation,
} = userApi;
export default userApi;
