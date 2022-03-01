import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import './Menu.scss';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__content">
        <img src={logo} alt="Marvel" width={100} />
        <div className="navbar__items">
          <Link to="/comics" className="navbar__item">
            Comics
          </Link>
          <Link to="/characters" className="navbar__item">
            Characters
          </Link>
          <Link to="/favorites" className="navbar__item">
            Favorites
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
