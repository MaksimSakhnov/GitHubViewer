import { IGithubApiResponse, IRepository } from 'services/githubApi/type.ts';
import { AdapterReturnType, RepositoryType } from 'store/app/types.ts';

function getGithubRepositoriesAdapter(
  response: IGithubApiResponse<IRepository>,
): AdapterReturnType<RepositoryType> {
  const data: RepositoryType[] = response.items.map((el) => {
    return {
      id: el.id,
      fullName: el.full_name,
      url: el.html_url,
      stargazersCount: el.stargazers_count,
      watchersCount: el.watchers_count,
      language: el.language,
      owner: {
        login: el.owner.login,
        avatarUrl: el.owner.avatar_url,
        id: el.owner.id,
      },
    };
  });

  return { totalCount: response.total_count, data: data };
}

export { getGithubRepositoriesAdapter };
