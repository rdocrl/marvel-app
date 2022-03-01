import { useNavigate } from 'react-router-dom';
import useFavorite from '../../hooks/useFavorite';
import Card from '../Card';
import { resourceTypes } from '../../constants';
import './FavoritesPage.scss';

const FavoritesPage = () => {
  const navigate = useNavigate();
  const [favorites, toggleFavorite] = useFavorite();

  const favoriteComics = favorites.filter((f) => f.type === resourceTypes.COMIC);
  const favoriteCharacters = favorites.filter((f) => f.type === resourceTypes.CHARACTER);
  const favoriteStories = favorites.filter((f) => f.type === resourceTypes.STORY);

  const comicsSection = favoriteComics.length ? (
    <div className="favorites">
      <h2>Comics</h2>
      <section className="favorites__list">
        {favoriteComics.map((c) => (
          <Card
            key={c.id}
            title={c.title}
            thumbnail={c.thumbnail}
            onClick={() => navigate(`/comics/${c.id}`)}
            id={c.id}
            isFavorite={favorites.some((f) => f.id === c.id)}
            onToggleFavorite={toggleFavorite}
            type={resourceTypes.COMIC}
          />
        ))}
      </section>
    </div>
  ) : null;

  const charactersSection = favoriteCharacters.length ? (
    <div>
      <h2>Characters</h2>
      <section className="favorites__list">
        {favoriteCharacters.map((c) => (
          <Card
            key={c.id}
            title={c.title}
            thumbnail={c.thumbnail}
            onClick={() => navigate(`/comics/${c.id}`)}
            id={c.id}
            isFavorite={favorites.some((f) => f.id === c.id)}
            onToggleFavorite={toggleFavorite}
            type={resourceTypes.CHARACTER}
          />
        ))}
      </section>
    </div>
  ) : null;

  const storiesSection = favoriteStories.length ? (
    <div>
      <h2>Stories</h2>
      <section className="favorites__list">
        {favoriteStories.map((c) => (
          <Card
            key={c.id}
            title={c.title}
            thumbnail={c.thumbnail}
            onClick={() => navigate(`/comics/${c.id}`)}
            id={c.id}
            isFavorite={favorites.some((f) => f.id === c.id)}
            onToggleFavorite={toggleFavorite}
            type={resourceTypes.STORY}
          />
        ))}
      </section>
    </div>
  ) : null;

  return (
    <main className="favorites">
      <h1>Favorites</h1>
      {favorites.length ? (
        <>
          {comicsSection}
          {charactersSection}
          {storiesSection}
        </>
      ) : (
        <h2>You have no favorites yet</h2>
      )}
    </main>
  );
};

export default FavoritesPage;
