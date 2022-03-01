import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getApiAuth, getApiUrl } from '../../helpers';
import useFetch from '../../hooks/useFetch';
import useFavorite from '../../hooks/useFavorite';
import Card from '../Card';
import Background from '../Background';
import Detail from '../Detail';
import Loading from '../Loading';
import ErrorComponent from '../Error';
import './ComicDetailsPage.scss';

const ComicDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [comics, isLoading, error] = useFetch(getApiUrl(`/comics/${id}`));
  const [characters, setCharacters] = useState([]);
  const [stories, setStories] = useState([]);
  const [favorites, toggleFavorite] = useFavorite();

  useEffect(() => {
    if (!comics) {
      return;
    }

    const charactersPromises = comics[0].characters.items.map(
      (i) =>
        new Promise((resolve, reject) => {
          fetch(`${i.resourceURI}?${getApiAuth()}`)
            .then((res) => res.json())
            .then((json) => resolve(json.data.results[0]))
            .catch((e) => reject(e));
        })
    );

    const storiesPromises = comics[0].stories.items.map(
      (i) =>
        new Promise((resolve, reject) => {
          fetch(`${i.resourceURI}?${getApiAuth()}`)
            .then((res) => res.json())
            .then((json) => resolve(json.data.results[0]))
            .catch((e) => reject(e));
        })
    );

    Promise.all(charactersPromises).then(setCharacters);
    Promise.all(storiesPromises).then(setStories);
  }, [comics]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorComponent />;
  }

  const comic = comics[0];
  const thumbnail = `${comic.thumbnail.path}/portrait_incredible.${comic.thumbnail.extension}`;

  return (
    <Background image={thumbnail}>
      <div className="comic-details">
        <Detail title={comic.title} description={comic.description} thumbnail={thumbnail} />
        <h2>Characters</h2>
        <div className="comic-details__list">
          {characters.map((c) => (
            <Card
              key={c.id}
              title={c.name}
              thumbnail={`${c.thumbnail.path}/portrait_incredible.${c.thumbnail.extension}`}
              onClick={() => navigate(`/characters/${c.id}`)}
              id={c.id}
              isFavorite={favorites.some((f) => f.id === c.id)}
              onToggleFavorite={toggleFavorite}
              type="characters"
            />
          ))}
        </div>
        <div className="comic-details__list">
          {stories.map((s) => (
            <Card
              key={s.id}
              title={s.title}
              thumbnail={
                s.thumbnail
                  ? `${s.thumbnail.path}/portrait_incredible.${s.thumbnail.extension}`
                  : null
              }
              id={s.id}
              isFavorite={favorites.some((f) => f.id === s.id)}
              onToggleFavorite={toggleFavorite}
              type="stories"
            />
          ))}
        </div>
      </div>
    </Background>
  );
};

export default ComicDetailsPage;
