import NavIcons from './NavIcons';
import NavLinks from './NavLinks';
import './style.css';

const Navbar = () => {
  const navLinks = ['Products', 'Cart', ' journal', ' about'];
  return (
    <nav className="navbar">
      <NavLinks Links={navLinks} />
      <NavIcons />
    </nav>
  );
};

export default Navbar;
