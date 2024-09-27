import { useEffect, useRef, useState } from 'react';
import { Provider, useSelector } from 'react-redux';
import store, { useAppDispatch } from 'store';
import { getGihubRepositories, selectData } from 'store/app';

import RepositoryCard from 'components/RepositoryCard';
import Paginate from 'components/Paginate';

function App() {
  const dispatch = useAppDispatch();
  const topRef = useRef(null);

  const reposData = useSelector(selectData);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(getGihubRepositories(currentPage));
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [currentPage]);

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
        {reposData.map((el) => (
          <RepositoryCard repositoryData={el} key={el.id} />
        ))}

        <Paginate currentPage={currentPage} setPage={setCurrentPage} />
      </div>
    </div>
  );
}

function AppWrapper() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default AppWrapper;
