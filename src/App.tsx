import { useEffect, useRef, useState } from 'react';
import { Provider, useSelector } from 'react-redux';
import { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import store, { useAppDispatch } from 'store';
import { getGihubRepositories, selectData, selectIsLoading } from 'store/app';

import RepositoryCard from 'components/RepositoryCard';
import Pagination from 'components/Pagination';

function App() {
  const dispatch = useAppDispatch();
  const topRef = useRef(null);

  const reposData = useSelector(selectData);
  const isLoading = useSelector(selectIsLoading);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(getGihubRepositories(currentPage));
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [currentPage]);

  const renderSkeletonContent = () => {
    const result = [];
    for (let i = 0; i < 10; i++) {
      result.push(<RepositoryCard key={i} isLoading={true} />);
    }
    return <>{...result}</>;
  };

  return (
    <div style={{ padding: '2vh 5vw', height: '100%' }} ref={topRef}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          alignItems: 'center',
        }}
      >
        {!isLoading &&
          reposData.map((el) => (
            <RepositoryCard repositoryData={el} key={el.id} />
          ))}
        {isLoading && renderSkeletonContent()}

        <Pagination currentPage={currentPage} setPage={setCurrentPage} />
      </div>
    </div>
  );
}

function AppWrapper() {
  return (
    <Provider store={store}>
      <SkeletonTheme baseColor="#242629" highlightColor="#3a3a3a" duration={5}>
        <App />
      </SkeletonTheme>
    </Provider>
  );
}

export default AppWrapper;
