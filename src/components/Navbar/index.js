import NavIcons from './NavIcons';
import NavLinks from './NavLinks';
import './style.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLinks />
      <NavIcons />
    </nav>
  );
};

export default Navbar;
