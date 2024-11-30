import { FaHome, FaEnvelope } from 'react-icons/fa';
import { LuDessert } from "react-icons/lu";
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
          <FaEnvelope />
        </a>
        <a href="#products" className="navbar-icon">
          <LuDessert />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
