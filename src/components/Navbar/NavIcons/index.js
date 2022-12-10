import './style.css';
import { FaSearch, FaHeart, FaShoppingBag } from 'react-icons/fa';

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
      <a href="#" className="nav-right-icons">
        <FaShoppingBag />
      </a>
    </div>
  );
};

export default NavIcons;
