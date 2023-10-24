import React from 'react'
import Card from '../components/Card'

const JopList = () => {
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
