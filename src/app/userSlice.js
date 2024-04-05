/* eslint-disable no-unused-vars */
import userApi from '@/api/userApi';
// import { createSlice } from '@reduxjs/toolkit';
import { buildCreateSlice, asyncThunkCreator } from '@reduxjs/toolkit';

const createAppSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

const userSlice = createAppSlice({
  name: 'user',
  initialState: {
    current: {},
    loading: false,
    error: '',
  },
  reducers: (create) => ({
    getMe: create.asyncThunk(
      async (params, thunkApi) => {
        // thunkApi.dispatch(...)
        const currentUser = await userApi.getMe();
        return currentUser;
      },
      {
        pending: (state) => {
          state.loading = true;
        },
        rejected: (state, action) => {
          (state.loading = false),
            (state.error = action.payload ?? action.error);
        },
        fulfilled: (state, action) => {
          state.loading = false;
          state.current = action.payload;
        },
      }
    ),
  }),
});

const { reducer, actions } = userSlice;
export const { getMe } = actions;
export default reducer;
