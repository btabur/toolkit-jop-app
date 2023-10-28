import React from 'react'
import {FaLocationDot} from "react-icons/fa6"
import {PiSuitcaseSimpleBold} from "react-icons/pi"
import {BsFillCalendar2DateFill} from "react-icons/bs"
const Card = ({jop}) => {


  const getClassName = ()=> {
    switch(jop.status) {
      case "Devam Ediyor" : 
      return "pending";
      case "Reddedildi" : 
      return "rejected";
      case "Mülakat" : 
      return "interview";
      default :
      return "default"
    }

  }
  return (
    <div className='card'>
     <div className="card-header">
     <div className='letter'> 
        <p>{jop.company[0]}</p>
      </div>
      <div className='info'>
        <p>{jop.position}</p>
        <p>{jop.company}</p>
      </div>
     </div>
     <div className="card-body">
        <div className='field'>
           <FaLocationDot/>
            <p>{jop.location}</p>
        </div>
        <div className='field'>
           <PiSuitcaseSimpleBold/>
            <p>{jop.type}</p>
        </div>
        <div className='field'>
            <BsFillCalendar2DateFill/>
            <p>{jop.date}</p>
        </div>
        <div className='status'>
            <span className={getClassName()}>{jop.status}</span>
        </div>  
     </div>
    </div>
  )
}

export default Card
