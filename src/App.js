import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Admin from './pages/admin/Admin'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/dashboard/*' element={<Admin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
