import React from 'react'
import {FaLocationDot} from "react-icons/fa6"
import {PiSuitcaseSimpleBold} from "react-icons/pi"
import {BsFillCalendar2DateFill} from "react-icons/bs"
const Card = () => {
  return (
    <div className='card'>
     <div className="card-header">
     <div className='letter'> 
        <p>U</p>
      </div>
      <div className='info'>
        <p>Frontend</p>
        <p>Udemig</p>
      </div>
     </div>
     <div className="card-body">
        <div className='field'>
           <FaLocationDot/>
            <p>İzmir/Bayraklı</p>
        </div>
        <div className='field'>
           <PiSuitcaseSimpleBold/>
            <p>Tam Zamanlı</p>
        </div>
        <div className='field'>
            <BsFillCalendar2DateFill/>
            <p>10/03/2023</p>
        </div>
        <div className='status'>
            <span>Mülakat</span>
        </div>  
     </div>
    </div>
  )
}

export default Card
