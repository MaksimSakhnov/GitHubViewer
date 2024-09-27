import { createAsyncThunk } from '@reduxjs/toolkit';
import { GithubApi } from 'services/githubApi/githubApi.ts';
import { getGithubRepositoriesAdapter } from 'store/app/adapters.ts';

const getGihubRepositories = createAsyncThunk(
  'app/getGihubRepositories',
  async (stars: number) => {
    const response = await GithubApi.getMostPopularRepositories(stars);
    return getGithubRepositoriesAdapter(response);
  },
);

export { getGihubRepositories };
