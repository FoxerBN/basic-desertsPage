import { FaHome, FaEnvelope } from 'react-icons/fa';
import { LuDessert, LuShoppingBasket } from "react-icons/lu";
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navbar = () => {

  return (
    <nav className='navbar'>
      <div className="navbar-logo"><img style={{width: '100px'}} src="/logo.png" alt="" /></div>
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
        <NavLink className="navbar-icon" to='/basket'><LuShoppingBasket /></NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
