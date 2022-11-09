import React, { useState} from 'react'
import './Header.css'
import logo from './../images/logo.png'
import { Link } from 'react-router-dom'

function Header() {
      const value = false
      const [click, setClick] =useState(value);

      const handleClick = () => {
        setClick(!click)
      }

      return (
        <>
          <nav className="flex justify-between items-center py-5 w-[90%] m-auto" >
            <Link to='/LiteVilleEngineering' className="text-xl">
              <img src={logo} alt="logo" className="mr-5 w-32 md:w-full"/>
            </Link> 
            
            <ul className={click ? 'nav-menu active' : 'nav-menu'} >
              <div className='option2 text-2xl p-8' onClick={handleClick}>
                <i className='fas fa-times' /> 
              </div>
              
              <Link to='/LiteVilleEngineering' className="inline-block lg:mr-10 text-xl hover:text-slate-500" onClick={handleClick}>
                <li className='hover:text-slate-500 border-b-2 border-t-2 border-white py-2'>Main</li> 
              </Link>

              <Link to='/about' className="drop relative inline-block lg:mr-10 text-xl" onClick={handleClick}>
                <li className='hover:text-slate-500 border-b-2 border-white md:py-3 py-2'> About </li>
                <div className='btn absolute -left-12 shadow-slate-700 shadow-lg rounded-md  z-10 bg-slate-200 hidden'>
                  <Link to='/intro' >
                    <li className='px-12 py-3 text-lg rounded-t-md hover:bg-blue-600'>Intro</li>
                  </Link>
                  <Link to='/profile'>
                    <li className='px-12 py-3 text-lg rounded-b-md hover:bg-blue-600'>Profile</li>
                  </Link>
                </div> 
              </Link>
                 
              <Link to='/activities' className="drop relative inline-block lg:mr-10 text-xl" onClick={handleClick}>
                <li className='hover:text-slate-500 border-b-2 border-white md:py-3 py-2'>Activities</li>
                <div className='btn absolute -left-12 shadow-slate-700 shadow-lg rounded-md  z-10 bg-slate-200 hidden'>
                  <Link to='/procurement' >
                    <li className='px-12 py-3 text-lg rounded-t-md hover:bg-blue-600'>Procurement</li>
                  </Link>
                  <Link to='/maintenance'>
                    <li className='px-12 py-3 text-lg rounded-b-md hover:bg-blue-600'>Maintenance</li>
                  </Link>
                </div>
              </Link>
              <Link to='/projects' className="inline-block lg:mr-10 text-xl" onClick={handleClick}>
                <li className='border-b-2 border-white py-2'>Projects</li> 
              </Link>
              <Link to='/contact-us' className="inline-block lg:mr-10 text-xl" onClick={handleClick}>
                <li className='border-b-2 border-white py-2'>Contact Us</li> 
              </Link>
            </ul>
            <div className='option text-2xl' onClick={handleClick}>
              <i className='fas fa-bars' /> 
            </div>
          </nav>
        </>
      );
}

export default Header;
