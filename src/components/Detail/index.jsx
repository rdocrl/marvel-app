import './Detail.scss';

const Detail = ({ title, description, thumbnail }) => {
  return (
    <div className="detail">
      <img src={thumbnail} alt={title} />
      <div className="detail__info">
        <h2>{title}</h2>
        <p>{description || 'No description available'}</p>
      </div>
    </div>
  );
};

export default Detail;
