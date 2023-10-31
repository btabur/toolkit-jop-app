import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { showFilter } from '../redux/jopSlice'

const Header = () => {
  const dispatch = useDispatch()
  const handleFiltrele = () => {
    dispatch(showFilter());
  }
  return (
<header>
    <div>
        <img src="logo.png" alt="jop" />
        <h2>İş Takip</h2>
    </div>
    <nav>
       <button onClick={handleFiltrele} className='btn-filtre'>Filtrele</button>
        <NavLink to={'/'}> İş Listesi</NavLink>
        <NavLink to={'/add-jop'}> İş Ekle</NavLink>
    </nav>
   
</header>
  )
}

export default Header
