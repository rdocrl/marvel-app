import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import Card from '../Card';
import Filter from '../Filter';
import Loading from '../Loading';
import OrderByBtn from '../OrderByBtn';
import ErrorComponent from '../Error';
import { getApiUrl } from '../../helpers';
import { comicFilterOptions } from './constants';
import './ComicsPage.scss';

const ComicsPage = () => {
  const navigate = useNavigate();
  const [filterType, setFilterType] = useState();
  const [filterText, setFilterText] = useState('');
  const [orderBy, setOrderBy] = useState();
  const filterRef = useRef(null);
  const [comics, isLoading, error] = useFetch(
    getApiUrl(
      '/comics',
      `${filterText && filterType ? `&${filterType}=${filterText}` : ''}${
        orderBy ? `&orderBy=${orderBy === '-' ? '-' : ''}issueNumber` : ''
      }`
    ),
    filterText ? 1000 : 0
  );

  useEffect(() => {
    if (filterText?.current) {
      filterRef.current.focus();
    }
  }, [comics]);

  const handleOrderBy = () => {
    setOrderBy((orderBy) => (orderBy === '+' ? '-' : '+'));
  };

  return (
    <main className="comics">
      {isLoading && <Loading />}
      <div className="comics__header">
        <h1>Comics</h1>
        <div className="comics__options">
          <Filter
            options={comicFilterOptions}
            onTypeChange={setFilterType}
            onTextChange={setFilterText}
            selected={filterType}
            text={filterText}
            ref={filterRef}
          />
          <OrderByBtn onClick={handleOrderBy} currentOrder={orderBy} />
        </div>
      </div>
      {error ? (
        <div className="comics__error">
          <ErrorComponent />
        </div>
      ) : comics?.length ? (
        <section className="comics__list">
          {comics.map((c) => (
            <Card
              key={c.id}
              title={c.title}
              thumbnail={`${c.thumbnail.path}/portrait_incredible.${c.thumbnail.extension}`}
              onClick={() => navigate(`/comics/${c.id}`)}
            />
          ))}
        </section>
      ) : (
        <h2>No records found</h2>
      )}
    </main>
  );
};

export default ComicsPage;
