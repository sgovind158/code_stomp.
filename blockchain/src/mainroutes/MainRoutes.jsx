import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/nachiketHome/Home.jsx'
import Login from "../pages/Login.jsx"
import Signup from '../pages/Signup.jsx'
const MainRoutes = () => {
  const data=useSelector
  return (
     <Routes>
         <Route path='/'       element={<Home/>}/>
         <Route path='/login'  element={<Login/>}/>
         <Route path='/signup' element={<Signup/>}/>
     </Routes>
  )
}

export default MainRoutes