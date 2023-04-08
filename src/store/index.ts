import {configureStore} from '@reduxjs/toolkit';
import {apiSlice} from './apiSlice';
import {userSlice} from './UserSlice';

export const store = configureStore({
  reducer: {
    api: apiSlice.reducer,
    user: userSlice.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
});
