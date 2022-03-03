import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getApiAuth, getApiUrl } from '../../helpers';
import useFetch from '../../hooks/useFetch';
import useFavorite from '../../hooks/useFavorite';
import Background from '../Background';
import Detail from '../Detail';
import ErrorComponent from '../Error';
import Loading from '../Loading';
import CardsList from '../CardsList';
import { resourceTypes } from '../../constants';
import './CharacterDetailsPage.scss';

const CharacterDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [characters, isLoading, error] = useFetch(getApiUrl(`/characters/${id}`));
  const [comics, setComics] = useState([]);
  const [stories, setStories] = useState([]);
  const [favorites, toggleFavorite] = useFavorite();

  useEffect(() => {
    if (!characters) {
      return;
    }

    const comicsPromises = characters[0].comics.items.map(
      (i) =>
        new Promise((resolve, reject) => {
          fetch(`${i.resourceURI}?${getApiAuth()}`)
            .then((res) => res.json())
            .then((json) => resolve(json.data?.results[0]))
            .catch((e) => reject(e));
        })
    );

    const storiesPromises = characters[0].stories.items.map(
      (i) =>
        new Promise((resolve, reject) => {
          fetch(`${i.resourceURI}?${getApiAuth()}`)
            .then((res) => res.json())
            .then((json) => resolve(json.data?.results[0]))
            .catch((e) => reject(e));
        })
    );

    Promise.all(comicsPromises).then(setComics);
    Promise.all(storiesPromises).then(setStories);
  }, [characters]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorComponent />;
  }

  const character = characters[0];
  const thumbnail = `${character.thumbnail.path}/portrait_incredible.${character.thumbnail.extension}`;

  const handleCardClick = (url) => navigate(url);

  return (
    <Background image={thumbnail}>
      <div className="character-details">
        <Detail title={character.name} description={character.description} thumbnail={thumbnail} />
        <h2>Comics</h2>
        <section className="character-details__list">
          <CardsList
            data={comics}
            onClick={handleCardClick}
            type={resourceTypes.COMIC}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
          />
        </section>
        <h2>Stories</h2>
        <section className="character-details__list">
          <CardsList
            data={stories}
            onClick={handleCardClick}
            type={resourceTypes.STORY}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
          />
        </section>
      </div>
    </Background>
  );
};

export default CharacterDetailsPage;
