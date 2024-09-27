export type RepositoryType = {
  id: number;
  fullName: string;
  url: string;
  stargazersCount: number;
  watchersCount: number;
  language: string;
  owner: {
    login: string;
    id: number;
    avatarUrl: string;
  };
};

export type AdapterReturnType<T> = {
  totalCount: number;
  data: Array<T>;
};
