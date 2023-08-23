import React from 'react'
import wall from './wallpaperflare.com_wallpaper.jpg'
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar';
import { Text } from './Text';
import ecowall from './ecowall.png'
function Homepage() {
    const navigate = useNavigate();

  return (
    <>
    <div className='p-[20px]  md:p-[20px] bg-primary'>
    <Navbar/>
    </div>
    <img className='h-screen w-full mt-[-2.8%] absolute object-cover' src={ecowall}/>

    
    <div className=' absolute grid place-content-center w-full h-screen lg:mt-[-4%] mt-[-13%]'>
    {/* <div className='text-primary text-[100%] mt-[3%] absolute'>
        <Text/>
        </div> 
         */}
        <h1 className='text-center text-white text-[150%] font-bold'>ECOBRIDGE</h1>
        <h1 className='text-center text-white mr-10 ml-10'>Bridging Communities Towards A Sustainable Future, One Step At A Time.</h1>
        
        <div className='absolute w-full h-screen grid place-content-center'>
        <button className='w-full mt-[60%] bg-green-500 pt-1 pb-1 text-white rounded-xl pl-[60px] pr-[60px] background'  onClick={()=>{navigate('/chat')}}>Chat With Others! </button>
         
        </div>
    </div>
    </>

  )
}

export default Homepage