import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import Card from '../Card';
import Loading from '../Loading';
import Filter from '../Filter';
import OrderByBtn from '../OrderByBtn';
import ErrorComponent from '../Error';
import { getApiUrl } from '../../helpers';
import { characterFilterOptions } from './constants';
import './CharactersPage.scss';

const CharactersPage = () => {
  const navigate = useNavigate();
  const [filterType, setFilterType] = useState();
  const [filterText, setFilterText] = useState('');
  const [orderBy, setOrderBy] = useState();
  const filterRef = useRef(null);
  const [characters, isLoading, error] = useFetch(
    getApiUrl(
      '/characters',
      `${filterText && filterType ? `&${filterType}=${filterText}` : ''}${
        orderBy ? `&orderBy=${orderBy === '-' ? '-' : ''}name` : ''
      }`
    ),
    filterText ? 1000 : 0
  );

  useEffect(() => {
    if (filterText?.current) {
      filterRef.current.focus();
    }
  }, [characters]);

  const handleOrderBy = () => {
    setOrderBy((orderBy) => (orderBy === '+' ? '-' : '+'));
  };

  return (
    <main className="characters">
      {isLoading && <Loading />}
      <div className="characters__header">
        <h1>Characters</h1>
        <div className="characters__options">
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
        <div className="characters__error">
          <ErrorComponent />
        </div>
      ) : characters?.length ? (
        <section className="characters__list">
          {characters.map((c) => (
            <Card
              key={c.id}
              title={c.name}
              thumbnail={`${c.thumbnail.path}/portrait_incredible.${c.thumbnail.extension}`}
              onClick={() => navigate(`/characters/${c.id}`)}
            />
          ))}
        </section>
      ) : (
        <h2>No records found</h2>
      )}
    </main>
  );
};

export default CharactersPage;
