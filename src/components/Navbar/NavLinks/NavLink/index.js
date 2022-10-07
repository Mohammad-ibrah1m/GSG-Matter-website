import './style.css';
import { FaChevronDown } from 'react-icons/fa';

const NavLink = () => {
  return (
    <>
      <li className="nav-list-item">
        <a href="index.html" className="nav-link">
          one
          <span className="dropdown-icon">
            <FaChevronDown />
          </span>
        </a>
      </li>
    </>
  );
};

export default NavLink;
