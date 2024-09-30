import { createSlice } from '@reduxjs/toolkit';
import appInitialState from './initialState';
import { getGihubRepositories } from 'store/app/requests.ts';

const appSlice = createSlice({
  name: 'app',
  initialState: appInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getGihubRepositories.fulfilled, (state, action) => {
        state.repositoriesData = action.payload.data;
        state.totalCount = action.payload.totalCount;
        state.totalPages = Math.floor(state.totalCount / 20);
        state.isLoading = false;
      })
      .addCase(getGihubRepositories.pending, (state) => {
        state.isLoading = true;
      });
  },
});

export default appSlice;
