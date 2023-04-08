// create user module with state, getters, mutations, actions types react native redux toolkit

import {createSlice} from '@reduxjs/toolkit';

export const UserModule = createSlice({
  name: 'user',
  initialState: {
    user: null,
    token: null,
    loading: false,
    error: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
  },
});

export const {login} = UserModule.actions;
