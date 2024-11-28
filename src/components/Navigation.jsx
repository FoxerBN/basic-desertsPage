import { FaHome, FaEnvelope } from 'react-icons/fa';
import './Navigation.css';

const Navbar = () => {

  return (
    <nav className='navbar'>
      <div className="navbar-logo">MyApp</div>
      <div className="navbar-icons">
        <a href="/" className="navbar-icon">
          <FaHome title="Home" />
        </a>
        <a href="#contact" className="navbar-icon">
          <FaEnvelope title="Contact Us" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
