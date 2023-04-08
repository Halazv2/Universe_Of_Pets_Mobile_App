import {createSlice, createEntityAdapter} from '@reduxjs/toolkit';

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
  userid: '641709f5f4423168b428624e',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLogin: (
      state,
      action: {
        payload: {
          id: string;
          name: string;
          email: string;
          token: string;
        };
      },
    ) => {
      console.log('action.payload', action.payload);
      state.loading = true;
      state.user = action.payload;
    },
  },
});

export const {setLogin} = userSlice.actions;
export const userSelector = state => state.user;

export default userSlice.reducer;
