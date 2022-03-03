import { resourceTypes } from '../../constants';
import Card from '../Card';

const CardsList = ({ data, type, onClick, favorites, onToggleFavorite }) => {
  if (!Array.isArray(data) || !data.length) {
    return <h3>No {type} found</h3>;
  }

  return (
    <>
      {data.map((i) => (
        <Card
          key={i.id}
          title={i.name || i.title}
          thumbnail={
            i.thumbnail
              ? typeof i.thumbnail === 'string'
                ? i.thumbnail
                : `${i.thumbnail.path}/portrait_incredible.${i.thumbnail.extension}`
              : null
          }
          onClick={type === resourceTypes.STORY ? null : () => onClick(`/${type}/${i.id}`)}
          id={i.id}
          isFavorite={favorites.some((f) => f.id === i.id)}
          onToggleFavorite={onToggleFavorite}
          type={type}
        />
      ))}
    </>
  );
};

export default CardsList;
