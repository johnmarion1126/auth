/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  username: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logIn: (state) => {
      state.isLoggedIn = true;
    },
    logOut: (state) => {
      state.isLoggedIn = false;
    },
    setUsername: (state, { payload }) => {
      state.username = payload;
    },
  },
});

export const {
  logIn, logOut, setUsername,
} = userSlice.actions;
export default userSlice.reducer;
