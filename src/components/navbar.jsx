import React, {useState} from 'react';
import logo from '../Images/logo.png';
import {Link} from 'react-scroll';

function Navbar()  {
  const [nav,setnav]  = useState(false);

  const changeBackground =() => {
    if (window.scrollY >= 50) {
      setnav(true);
    }
    else{
      setnav(false);
    }
  }

  window.addEventListener('scroll',changeBackground);
  return (
    <nav className={nav ? "nav active" : "nav"}>
      <Link to="#" className= "logo" smooth={true} duration={2000}>
        <img src={logo} alt=''/>
      </Link>
      <input className= 'menu-btn' type= 'checkbox' id= 'menu-btn'/>
      <label className='menu-icon' for='menu-btn'><span className= 'nav-icon'></span>
      </label>
      <ul className= 'menu'>
        <li><link to='main' smooth={true} duration={1000}>Header</link></li>
        <li><link to='features' smooth={true} duration={1000}>Features</link></li>
        <li><link to='offer' smooth={true} duration={1000}>Offers</link></li>
        <li><link to='about' smooth={true} duration={1000}>About</link></li>
        <li><link to='contact' smooth={true} duration={1000}>Contacts</link></li>
      </ul>
   </nav>
  )
}

export default Navbar;
