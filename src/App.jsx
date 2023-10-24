import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import JopList from './pages/JopList'
import AddJop from './pages/AddJop'
import Header from './components/Header'

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<JopList/>}/>
        <Route path='/add-jop' element={<AddJop/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
