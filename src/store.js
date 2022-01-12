import { configureStore } from '@reduxjs/toolkit';

import userReducer from './features/User/userSlice';
import userApi from './services/User/userApi';

const store = configureStore({
  reducer: {
    user: userReducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(userApi.middleware),
});

export default store;
