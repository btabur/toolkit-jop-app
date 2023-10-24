import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
<header>
    <div>
        <img src="logo.png" alt="jop" />
        <h2>İş Takip</h2>
    </div>
    <nav>
        <NavLink to={'/'}> İş Listesi</NavLink>
        <NavLink to={'/add-post'}> İş Ekle</NavLink>
    </nav>
   
</header>
  )
}

export default Header
