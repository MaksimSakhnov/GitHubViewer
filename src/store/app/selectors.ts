import { RootState } from 'store/index.ts';

function selectData(store: RootState) {
  return store.app.repositoriesData;
}

function selectTotalPages(store: RootState) {
  return store.app.totalPages;
}

function selectTotalCount(store: RootState) {
  return store.app.totalCount;
}

export { selectData, selectTotalPages, selectTotalCount };
