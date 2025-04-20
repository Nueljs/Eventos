import React from 'react'
import { Hedaer } from './components/Hedaer/Hedaer'
import { Outlet } from 'react-router-dom'
import { Footer } from "./components/Footer/Footer"

export const MainLayout = () => {
  return (
    <div>
        <Hedaer/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
