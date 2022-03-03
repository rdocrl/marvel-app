import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import useFavorite from '../../hooks/useFavorite';
import Loading from '../Loading';
import Filter from '../Filter';
import OrderByBtn from '../OrderByBtn';
import ErrorComponent from '../Error';
import CardsList from '../CardsList';
import { getApiUrl } from '../../helpers';
import { characterFilterOptions } from '../CharactersPage/constants';
import './ResourcesPage.scss';

const ResourcesPage = ({ type, orderByValue }) => {
  const navigate = useNavigate();
  const [filterType, setFilterType] = useState();
  const [filterText, setFilterText] = useState('');
  const [orderBy, setOrderBy] = useState();
  const filterRef = useRef(null);
  const [resources, isLoading, error] = useFetch(
    getApiUrl(
      `/${type}`,
      `${filterText && filterType ? `&${filterType}=${filterText}` : ''}${
        orderBy ? `&orderBy=${orderBy === '-' ? '-' : ''}${orderByValue}` : ''
      }`
    ),
    filterText ? 1000 : 0
  );
  const [favorites, toggleFavorite] = useFavorite();

  useEffect(() => {
    if (filterText?.current) {
      filterRef.current.focus();
    }
  }, [resources]);

  const handleOrderBy = () => setOrderBy((orderBy) => (orderBy === '+' ? '-' : '+'));

  const handleCardClick = (url) => navigate(url);

  return (
    <main className="resources">
      {isLoading && <Loading />}
      <div className="resources__header">
        <h1>{type.charAt(0).toUpperCase() + type.slice(1)}</h1>
        <div className="resources__options">
          <Filter
            options={characterFilterOptions}
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
        <div className="resources__error">
          <ErrorComponent />
        </div>
      ) : (
        <section className="resources__list">
          <CardsList
            data={resources}
            onClick={handleCardClick}
            type={type}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
          />
        </section>
      )}
    </main>
  );
};

export default ResourcesPage;
