import { RootState } from 'store/index.ts';

function selectData(store: RootState) {
  return store.app.repositoriesData;
}

function selectTotalPages(store: RootState) {
  return store.app.totalPages;
}

function selectIsLoading(store: RootState) {
  return store.app.isLoading;
}

export { selectData, selectTotalPages, selectIsLoading };
