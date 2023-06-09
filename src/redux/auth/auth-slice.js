import { createSlice } from '@reduxjs/toolkit';

import { signup, login, current, logout } from './auth-operations';

const initialState = {
  user: {},
  token: '',
  isLogin: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder

      //signup
      .addCase(signup.pending, store => {
        store.loading = true;
        store.error = null;
      })
      .addCase(signup.fulfilled, (store, { payload }) => {
        const { user, token } = payload;
        store.loading = false;
        store.user = user;
        store.token = token;
        store.isLogin = true;
      })
      .addCase(signup.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })

      //login
      .addCase(login.pending, store => {
        store.loading = true;
        store.error = null;
      })
      .addCase(login.fulfilled, (store, { payload }) => {
        const { user, token } = payload;
        store.loading = false;
        store.user = user;
        store.token = token;
        store.isLogin = true;
      })
      .addCase(login.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })

      //current
      .addCase(current.pending, store => {
        store.loading = true;
        store.error = null;
      })
      .addCase(current.fulfilled, (store, { payload }) => {
        const user = payload;
        store.loading = false;
        store.user = user;
        store.isLogin = true;
      })
      .addCase(current.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })

      //logout
      .addCase(logout.pending, store => {
        store.loading = true;
        store.error = null;
      })
      .addCase(logout.fulfilled, store => {
        store.loading = false;
        store.user = {};
        store.token = '';
        store.isLogin = false;
      })
      .addCase(logout.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      });
  },
});

export default authSlice.reducer;
