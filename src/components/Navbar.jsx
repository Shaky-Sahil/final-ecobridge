import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-content">
      <button  ><Link to={"/"} className='nog' style={{textDecoration: 'none'}} >Home</Link></button>
      <button  ><Link to={"/appointment"} className='nog' style={{textDecoration: 'none'}} >Appointment</Link></button>
      <button  ><Link to={"/community"} className='nog' style={{textDecoration: 'none'}} >Communities</Link></button>
      <button  ><Link to={"/cardpage"} className='nog' style={{textDecoration: 'none'}} >Guides</Link></button>
      
      </div>
    </div>
  );
};

export default Navbar;
