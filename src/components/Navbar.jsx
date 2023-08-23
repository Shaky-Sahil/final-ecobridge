import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className="mb-10 overflow-hidden bg-primary">
      <div className="navbar-content text-[60%] md:text-[100%]">
      <button className='bg-white rounded-xl pb-1 pt-1 pl-3 pr-3 button-primary' ><Link to={"/homepage"} className='nog' style={{textDecoration: 'none'}} >Home</Link></button>
      <button className='bg-white button-primary rounded-xl pb-1 pt-1 pl-3 pr-3' ><Link to={"/appointment"} className='nog' style={{textDecoration: 'none'}} >Appointment</Link></button>
      <button className='bg-white rounded-xl pb-1 button-primary pt-1 pl-3 pr-3' ><Link to={"/community"} className='nog' style={{textDecoration: 'none'}} >Communities</Link></button>
      <button  className='bg-white button-primary rounded-xl pb-1 pt-1 pl-3 pr-3'><Link to={"/cardpage"} className='nog' style={{textDecoration: 'none'}} >Guides</Link></button>
      
      </div>
    </div>
  );
};

export default Navbar;
