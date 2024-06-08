import {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {NavLink, Link} from "react-router-dom";
import BFMTV_Logo from "../../assets/images/header/BFMTV_Logo.jpg";


// import { useLogoutMutation } from '../../slices/userApiSlice';
// import { logout } from '../../slices/authSlice';

import {logout} from "../../slices/authSlice";
import {useLogoutMutation} from "../../slices/userApiSlice"

const Nav = ({onSearchButtonClick}) => {
  const { userInfo } = useSelector((state) => state.auth);

  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  }

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();
  
  const logoutHandler = async () => {
      try {
        await logoutApiCall().unwrap();
        dispatch(logout());
        navigate('/login');
      } catch (err) {
        console.error(err);
      }
  };

  return (
    <>
      <nav className='flex bg-slate-800'>
        <section id="left-nav" className='flex basis-3/4 justify-evenly items-center mr-4'>
          <div
          onClick={() => {
            toggleMenu();
            onSearchButtonClick();
          }}
          >
            {isMenuOpen ? (
              // Close icon (X)
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger icon
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
              
            )}
          </div>

          <Link to="/">
            <div className="flex justify-center ">
              <img src={ BFMTV_Logo} alt="" className='h-10'/>
            </div>
          </Link>
         
          <NavLink to='/france' className='text-white text-[0.937rem] font-bold hover:border-b hover:border-white' onClick={logoutHandler}> France</NavLink>
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
          <div 
          className=" cursor-pointer" 
          onClick={onSearchButtonClick}
          >
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