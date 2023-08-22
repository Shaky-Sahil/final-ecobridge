import React from 'react';
import "./Appointment.css";
import AppointmentCard from './AppointmentCard';
import Navbar from './Navbar';
function Appointment() {
  return (
    <>
    <div className="Appointment">
      <Navbar/>
        <h1 className='Head1'>Appointment</h1>
        <div className='black'>
            <button className="search-button">
            Search
            </button>
             <AppointmentCard/>
            {/* <img className='map1' src="https://bufferwall.com/download/B20190923T000000374_1200x600.jpg" alt=''/> */}
        </div>
    </div>
    <img className='map' src="https://bufferwall.com/download/B20190923T000000374_1200x600.jpg" alt=''/>
    </>
  )
}

export default Appointment