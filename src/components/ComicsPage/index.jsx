import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import useFavorite from '../../hooks/useFavorite';
import Filter from '../Filter';
import Loading from '../Loading';
import OrderByBtn from '../OrderByBtn';
import ErrorComponent from '../Error';
import CardsList from '../CardsList';
import { getApiUrl } from '../../helpers';
import { comicFilterOptions } from './constants';
import { resourceTypes } from '../../constants';
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
  const [favorites, toggleFavorite] = useFavorite();

  useEffect(() => {
    if (filterText?.current) {
      filterRef.current.focus();
    }
  }, [comics]);

  const handleOrderBy = () => setOrderBy((orderBy) => (orderBy === '+' ? '-' : '+'));

  const handleCardClick = (url) => navigate(url);

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
      ) : (
        <section className="comics__list">
          <CardsList
            data={comics}
            onClick={handleCardClick}
            type={resourceTypes.COMIC}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
          />
        </section>
      )}
    </main>
  );
};

export default ComicsPage;
