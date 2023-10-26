import React from 'react'
import Card from '../components/Card'
import { useEffect } from "react";
import axios  from "axios";

const JopList = () => {
  const dispatch = UseDispatch()

  useEffect(()=> {

    axios.get('http://localhost:4000/jobs')
    .then((res) =>console.log() )
    .catch()
  },[])
  return (
    <div className='list-page'>
      <h3 className='jop-count'>
        Bulunan 11 iş arasından 9 tane görüntüleniyor
      </h3>
      <section className='jop-list'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </section>
    </div>
  )
}

export default JopList
