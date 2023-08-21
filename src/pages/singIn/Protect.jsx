import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import "./style.scss"

const Protect = () => {
    const token = localStorage.getItem('loggedin')
  return token? <Outlet/> : <Navigate to = {"/SignIn"} />
}

export default Protect