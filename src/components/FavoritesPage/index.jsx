import { useNavigate } from 'react-router-dom';
import useFavorite from '../../hooks/useFavorite';
import CardsList from '../CardsList';
import { resourceTypes } from '../../constants';
import './FavoritesPage.scss';

const FavoritesPage = () => {
  const navigate = useNavigate();
  const [favorites, toggleFavorite] = useFavorite();

  const favoriteComics = favorites.filter((f) => f.type === resourceTypes.COMIC);
  const favoriteCharacters = favorites.filter((f) => f.type === resourceTypes.CHARACTER);
  const favoriteStories = favorites.filter((f) => f.type === resourceTypes.STORY);

  const handleCardClick = (url) => navigate(url);

  const comicsSection = favoriteComics.length ? (
    <div className="favorites">
      <h2>Comics</h2>
      <section className="favorites__list">
        <CardsList
          data={favoriteComics}
          onClick={handleCardClick}
          type={resourceTypes.COMIC}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
        />
      </section>
    </div>
  ) : null;

  const charactersSection = favoriteCharacters.length ? (
    <div>
      <h2>Characters</h2>
      <section className="favorites__list">
        <CardsList
          data={favoriteCharacters}
          onClick={handleCardClick}
          type={resourceTypes.CHARACTER}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
        />
      </section>
    </div>
  ) : null;

  const storiesSection = favoriteStories.length ? (
    <div>
      <h2>Stories</h2>
      <section className="favorites__list">
        <CardsList
          data={favoriteStories}
          onClick={handleCardClick}
          type={resourceTypes.STORY}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
        />
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
