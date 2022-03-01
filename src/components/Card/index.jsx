import './Card.scss';

const Card = ({ title, thumbnail, onClick, isFavorite, id, onToggleFavorite, type }) => {
  return (
    <article
      className="card"
      onClick={onClick}
      title={typeof onClick === 'function' ? 'See details' : ''}>
      {typeof thumbnail === 'string' ? (
        <img src={thumbnail} className="card__thumbnail" alt={title} />
      ) : (
        <div className="card__thumbnail--no-thumbnail">Image not available</div>
      )}
      <div
        className={`card__favorite ${isFavorite ? '' : 'card__favorite--no-favorite'}`}
        title={isFavorite ? 'Remove favorite' : 'Add favorite'}
        onClick={(e) => {
          e.stopPropagation();
          const newFavorite = { id, title, thumbnail, type };
          onToggleFavorite(newFavorite);
        }}>
        <span className="card__star">⭐</span>
      </div>
      <h3 className="card__title">{title}</h3>
    </article>
  );
};

export default Card;
