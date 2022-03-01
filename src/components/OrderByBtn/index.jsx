import './OrderByBtn.scss';

const OrderByBtn = ({ onClick, currentOrder }) => {
  return (
    <button className="order-by-btn" onClick={onClick}>
      Order By {currentOrder ? (currentOrder === '+' ? '▲' : '▼') : ''}
    </button>
  );
};

export default OrderByBtn;
