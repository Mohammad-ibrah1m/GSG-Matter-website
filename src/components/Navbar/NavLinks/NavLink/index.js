import './style.css';
import { FaChevronDown } from 'react-icons/fa';

const NavLink = ({ link }) => {
  return (
    <>
      <li className="nav-list-item">
        <a href="index.html" className="nav-link">
          {link}
          <span className="dropdown-icon">
            <FaChevronDown />
          </span>
        </a>
      </li>
    </>
  );
};

export default NavLink;
