import './style.css';
import { FaSearch, FaHeart, FaShoppingBag } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NavIcons = () => {
  return (
    <div className="nav-right">
      <a href="#" className="login-link nav-right-icons">
        login
      </a>
      <a href="#" className="nav-right-icons">
        <FaSearch />
      </a>
      <a href="#" className="nav-right-icons">
        <FaHeart />
      </a>
      <Link to="/cart" className="nav-right-icons">
        <FaShoppingBag />
      </Link>
    </div>
  );
};

export default NavIcons;
