import { useSelector } from 'react-redux';
import { selectTotalPages } from 'store/app';

import type { PaginationProps } from 'components/Pagination/Pagination.type.ts';

import styles from './Pagination.module.scss';

export function Pagination({ setPage, currentPage }: PaginationProps) {
  const totalPages = useSelector(selectTotalPages);
  const goNext = () => setPage((prev) => prev + 1);

  const goPrevious = () => setPage((prev) => prev + 1);

  return (
    <div className={styles.content}>
      <button disabled={currentPage === 1} onClick={goPrevious}>
        {'< Previous'}
      </button>
      <button disabled={currentPage === totalPages} onClick={goNext}>
        {'Next >'}
      </button>
    </div>
  );
}
