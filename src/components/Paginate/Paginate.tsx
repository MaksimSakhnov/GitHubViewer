import { useSelector } from 'react-redux';
import { selectTotalPages } from 'store/app';

import type { PaginateProps } from 'components/Paginate/Paginate.type.ts';

import styles from './Paginate.module.scss';

export function Paginate({ setPage, currentPage }: PaginateProps) {
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
