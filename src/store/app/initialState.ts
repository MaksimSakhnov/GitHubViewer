import { RepositoryType } from 'store/app/types.ts';

const appInitialState = {
  repositoriesData: [] as RepositoryType[],
  totalCount: 0 as number,
  totalPages: 0,
};

export default appInitialState;
