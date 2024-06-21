import React from 'react'
import Navigation from '../Components/Navigation'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'
import CountDown from '../Components/CountDown'

function RootLayout() {
  return (
    <>
        <div>
          <CountDown/>
            <Navigation/>
            <main className='min-h-80'>
              <Outlet/>
            </main>
            <footer className='h-16 text-white bg-slate-700'>
                <Footer/>
            </footer>
        </div>
    </>
  )
}

export default RootLayout