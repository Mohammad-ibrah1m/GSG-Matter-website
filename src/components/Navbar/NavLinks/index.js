import './style.css';

import NavLink from './NavLink';
import { Link } from 'react-router-dom';

const NavLinks = ({ Links }) => {
  return (
    <div className="nav-left">
      <ul className="nav-list">
        <li className="nav-list-item">
          <h2 className="matter-logo">
            <Link to=".." className="logo-link">
              matter
            </Link>
          </h2>
        </li>
        {Links.map((item) => {
          return (
            <>
              <NavLink link={item} />
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default NavLinks;
