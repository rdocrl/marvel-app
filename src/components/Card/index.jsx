import './Card.scss';

const Card = ({ title, thumbnail, onClick }) => (
  <article
    className="card"
    onClick={onClick}
    title={typeof onClick === 'function' ? 'See details' : ''}>
    {typeof thumbnail === 'string' ? (
      <img src={thumbnail} className="card__thumbnail" alt={title} />
    ) : (
      <div className="card__thumbnail--no-thumbnail">Image not available</div>
    )}
    <h3 className="card__title">{title}</h3>
  </article>
);

export default Card;
