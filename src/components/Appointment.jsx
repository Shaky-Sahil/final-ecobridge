import React from 'react';
import "./Appointment.css";
import AppointmentCard from './AppointmentCard';
import Navbar from './Navbar';
function Appointment() {
  return (
    <>
    <div className='p-[20px] md:p-[20px] bg-primary'>
    <Navbar/>

    </div>
    <div className="bg-primary grid place-content-center w-full h-screen over mt-[-27%] md:mt-[-7.8%] overflow-hidden">
        <h1 className='text-center font-bold mb-3 text-white h1'>APPOINTMENT</h1>
        <div className='text-center'>
            <button className="bg-green-500 rounded-xl mb-3 pl-[50px] pr-[50px]">
            Search
            </button>
             <AppointmentCard/>
        </div>
    </div>
    
    </>
  )
}

export default Appointment