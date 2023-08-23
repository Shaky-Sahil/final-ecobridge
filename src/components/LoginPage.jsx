import React from 'react';
import wall from './wallpaperflare.com_wallpaper.jpg'
import logo from './ecologo.png'

import './LoginPage.css'; // You can define your styles in a separate CSS file
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <>
    <img className='h-screen w-full absolute object-cover' src={wall}/>
    <div className='w-full h-screen absolute flex justify-center items-center'>
    <img className='mb-[100%] md:mb-[45%] lg:mb-[25%] md:w-[5%]  w-[20%]' src={logo}/>
    </div>


    <div className="grid place-content-center h-screen absolute w-full">
      <h1 className="app-title font-bold">ECOBRIDGE</h1>
      <div className="login-form">
        <input type="text" placeholder="Username" className="login-input" />
        <input type="password" placeholder="Password" className="login-input" />
        <button className="login-button pt-1 pb-1 background pl-[100px]  pr-[100px]" onClick={()=>{navigate('/homepage')}}>Login</button>
      </div>
      <button className="signup-button pt-1 pb-1 background pl-[45px] pr-[45px]">Sign Up</button>
      
    </div>
    </>
  );
};

export default LoginPage;
