import React from 'react'
import Navigation from '../Components/Navigation'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'

function RootLayout() {
  return (
    <>
        <div>
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