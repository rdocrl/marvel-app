import logo from '../../assets/logo.svg';
import './Loading.scss';

const Loading = () => {
  return (
    <div className="loading">
      <img className="loading__logo" src={logo} alt="Loading..." />
    </div>
  );
};

export default Loading;
