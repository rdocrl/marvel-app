import { useEffect, useState } from 'react';

const useFavorite = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    setFavorites(setFavorites ? JSON.parse(storedFavorites) : []);
  }, []);

  const toggleFavorite = (favorite) => {
    let newFavorites;
    const storedFavorite = favorites.some((f) => f.id === favorite.id);

    if (storedFavorite) {
      newFavorites = favorites.filter((f) => f.id !== favorite.id);
    } else {
      newFavorites = [...favorites, favorite];
    }

    localStorage.setItem('favorites', JSON.stringify(newFavorites));
    setFavorites(newFavorites);
  };

  return [favorites, toggleFavorite];
};

export default useFavorite;
