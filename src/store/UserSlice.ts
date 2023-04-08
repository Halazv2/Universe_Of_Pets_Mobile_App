import {createSlice, createEntityAdapter, PayloadAction} from '@reduxjs/toolkit';

const userAdapter = createEntityAdapter();

type User = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  token: string;
};

interface initialState {
  loading: boolean;
  error: string | null;
  user: User | [];
  userid: string;
}

const initialState: initialState = {
  loading: false,
  error: null,
  user: [],
  userid: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLogin: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      console.log('userSlice.ts: ', state.user);
    },
  },
});

export const {setLogin} = userSlice.actions;
export const userSelector = state => state.user;

export default userSlice.reducer;
