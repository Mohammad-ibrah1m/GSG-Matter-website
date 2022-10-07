import './style.css';

import NavLink from './NavLink';

const NavLinks = () => {
  return (
    <div className="nav-left">
      <ul className="nav-list">
        <li className="nav-list-item">
          <h2 className="matter-logo">
            <a href="index.html" className="logo-link">
              matter
            </a>
          </h2>
        </li>
        {[1, 2, 3, 4].map((item) => {
          return (
            <>
              <NavLink />
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default NavLinks;
