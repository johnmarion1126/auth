import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 'Hello World',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    sayHello: (state, { payload }) => {
      // eslint-disable-next-line no-console
      console.log(payload);
    },
  },
});

export const { sayHello } = userSlice.actions;
export default userSlice.reducer;
