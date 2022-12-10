import './style.css';
import { FaChevronDown } from 'react-icons/fa';
import React from 'react';
import { Link } from 'react-router-dom';

const NavLink = ({ link }) => {
  return (
    <>
      <li className="nav-list-item">
        <Link to={link} className="nav-link">
          {link}
          <span className="dropdown-icon">
            <FaChevronDown />
          </span>
        </Link>
      </li>
    </>
  );
};

export default NavLink;
