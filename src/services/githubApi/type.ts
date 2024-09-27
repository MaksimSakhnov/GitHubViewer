export interface IRepository {
  id: number;
  full_name: string;
  html_url: string;
  stargazers_count: number;
  watchers_count: number;
  language: string;
  owner: {
    login: string;
    id: number;
    avatar_url: string;
  };
}

export interface IGithubApiResponse<T> {
  total_count: number;
  items: Array<T>;
}
