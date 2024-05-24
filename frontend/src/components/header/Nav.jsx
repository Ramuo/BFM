import React from 'react';
import {NavLink} from "react-router-dom";
import BFMTV_Logo from "../../assets/images/header/BFMTV_Logo.jpg"

const Nav = () => {
  return (
    <>
      <nav className='flex bg-black'>
        <section id="left-nav" className='flex basis-3/4 justify-evenly items-center mr-4'>
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-white text-[0.937rem] font-bold">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>

          <div className="flex justify-center ">
            <img src={ BFMTV_Logo} alt="" className='h-10'/>
          </div>
         
          <NavLink to='/france' className='text-white text-[0.937rem] font-bold hover:border-b hover:border-white'> France</NavLink>
          <NavLink to='/monde' className='text-white text-[0.937rem] font-bold hover:border-b hover:border-white'> Monde</NavLink>
          <NavLink to='/politics' className='text-white text-[0.937rem] font-bold hover:border-b hover:border-white'>Politiques</NavLink>
          <NavLink to='/business' className='text-white text-[0.937rem] font-bold hover:border-b hover:border-white'>Business</NavLink>
          <NavLink to='/opinion' className='text-white text-[0.937rem] font-bold hover:border-b hover:border-white'>Opinions</NavLink>
          <NavLink to='/health' className='text-white text-[0.937rem] font-bold hover:border-b hover:border-white'> Santé</NavLink>
          <NavLink to='/entertainment' className='text-white text-[0.937rem] font-bold hover:border-b hover:border-white'>Divertissement</NavLink>
          <NavLink to='/style' className='text-white text-[0.937rem] font-bold hover:border-b hover:border-white'>Mode</NavLink>
          <NavLink to='/travel' className='text-white text-[0.937rem] font-bold hover:border-b hover:border-white'>Voyage</NavLink>
          <NavLink to='/sport' className='text-white text-[0.937rem] font-bold hover:border-b hover:border-white'>Sports</NavLink>
      
        </section>

        <section id="right-nav" className="flex basis-1/4 justify-evenly items-center">
          {/* <NavLink to='/watch' className='text-white text-[0.937rem] font-bold'>Regarder</NavLink> */}
          <NavLink to='/listen' className='text-white text-[0.937rem] font-bold hover:border-b hover:border-white'>Écouter</NavLink>
          <NavLink to='/live-tv' className='text-white text-[0.937rem] font-bold hover:border-b hover:border-white'>Direct TV</NavLink>
          <div className=" cursor-pointer" >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-white">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
          <NavLink to="/login" className="text-white p-1 rounded text-[0.937rem] border border-white font-bold">Connexion</NavLink>
        </section>
      </nav>
    </>
  )
}

export default Nav