import './style.css';

import NavLink from './NavLink';

const NavLinks = ({ Links }) => {
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
