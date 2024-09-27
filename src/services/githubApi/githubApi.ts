import githubBase from 'services/githubApi/base.ts';
import type {
  IGithubApiResponse,
  IRepository,
} from 'services/githubApi/type.ts';

export const GithubApi = {
  async getMostPopularRepositories(page: number) {
    const response = await githubBase.get<IGithubApiResponse<IRepository>>(
      `search/repositories?q=stars:>10000&sort=stars&order=desc&per_page=20&page=${page}`,
    );
    // axios почему то не подхватывал generic
    return response.data as IGithubApiResponse<IRepository>;
  },
};
