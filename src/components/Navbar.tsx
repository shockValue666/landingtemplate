"use client";
import React, { useState } from 'react'
import logo from '../../public/images/logo.png'
import hardbull from '../../public/images/hardbull.png'
import { navItems } from '@/constants'
import {Menu, X} from 'lucide-react';
import ShitMenu from './ShitMenu';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import Link from 'next/link';
import { ChangeTheme } from './ChangeTheme';


const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  }
  return (
    <nav className='sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80'>
      <div className='container px-4 mx-auto relative text-sm  flex justify-between'>
        <div className='flex justify-between items-center '>
          <div className='flex items-center flex-shrink-0'>
              <img src={hardbull.src} alt="logo" className='w-10 h-10 mr-2 rounded-xl' />
              <span className='text-xl tracking-tight'>HARDBULL</span>
          </div>
          <ul className='hidden lg:flex ml-14 space-x-12'>
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className='hidden lg:flex justify-center space-x-12 items-center'>
            <a href="#" className='py-2 px-3 border rounded-md text-black dark:text-white'>
              Sign In
            </a>
            <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md'>
              Create an account
            </a>
          </div>
          <div className='lg:hidden md:flex flex-col justify-end'>
            {/* <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X size={24} /> : <Menu size={24} /> }
            </button> */}
          </div>
        </div>

        <div className='block lg:hidden'>

          <Sheet>
            <SheetTrigger className=''  onClick={(e)=>{console.log("current mobileDrawerOpen: ",mobileDrawerOpen);setMobileDrawerOpen(!mobileDrawerOpen)}}>
              {/* {mobileDrawerOpen ? <X size={36} /> : <Menu size={36} /> } */}
              <Menu size={36} />
            </SheetTrigger>
            <SheetContent className='dark:bg-black border border-green-500'>
              <SheetHeader>
                <SheetTitle className='w-full text-center dark:text-white text-black '>Menu</SheetTitle>
                {/* <SheetDescription> */}

                  <div className=' z-20  w-full p-12 flex flex-col justify-center items-center lg:hidden'>
                    <ul>
                      {navItems.map((item, index) => (
                        <li key={index} className='py-2 flex flex-col'>
                          <Link className='text-center  bg-black text-white rounded-xl px-4 py-6 hover:bg-orange-500' href={item.href}>{item.label}</Link>
                        </li>
                      ))}
                    </ul>
                    <div className='flex space-x-6'>
                      <a href="#" className='py-2 px-3 border dark:text-white text-black text-lg hover:bg-orange-500 rounded-md text-center'>
                        Sign In
                      </a>
                      <a href="#" className="bg-black text-white py-2 px-3 text-lg text-center hover:bg-orange-500 rounded-md">
                        Sign Up
                      </a>
                    </div>  
                  </div>
              {mobileDrawerOpen && (
                <></>
                // <div className=' z-20  w-full p-12 flex flex-col justify-center items-center lg:hidden'>
                //   <ul>
                //     {navItems.map((item, index) => (
                //       <li key={index} className='py-2 flex flex-col'>
                //         <Link className='text-center bg-black text-white rounded-xl px-4 py-6 hover:bg-orange-500' href={item.href}>{item.label}</Link>
                //       </li>
                //     ))}
                //   </ul>
                //   <div className='flex space-x-6'>
                //     <a href="#" className='py-2 px-3 border text-black text-lg hover:bg-orange-500 rounded-md text-center'>
                //       Sign In
                //     </a>
                //     <a href="#" className="bg-black text-white py-2 px-3 text-lg text-center hover:bg-orange-500 rounded-md">
                //       Sign Up
                //     </a>
                //   </div>  

                // </div>
              )}
                    {/* </SheetDescription> */}
                    <ChangeTheme/>
              </SheetHeader>
            </SheetContent>
        </Sheet>

        </div>
        
      </div>
    </nav>
  )
}

export default Navbar