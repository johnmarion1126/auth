/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  username: '',
  token: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logIn: (state) => {
      state.isLoggedIn = true;
    },
    setUsername: (state, { payload }) => {
      state.username = payload;
    },
    setToken: (state, { payload }) => {
      state.token = `bearer ${payload}`;
    },
  },
});

export const {
  logIn, setUsername, setToken,
} = userSlice.actions;
export default userSlice.reducer;
