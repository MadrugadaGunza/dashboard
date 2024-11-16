import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import Setting from './Setting'
import Profile from './Profile'

const Admin = () => {
    return (
        <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/setting' element={<Setting />} />
            <Route path='/profile' element={<Profile />} />
        </Routes>
    )
}

export default Admin
