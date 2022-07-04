import React from 'react';
import { Link } from 'react-router-dom';

// Images
import Connect_Plus_logo from '../assets/icons/Connect_Plus_logo.png';
import England_Flag from '../assets/icons/englandFlag.jpg';



const Header = () => {
  return (
    <>
      <header className="fixed w-full h-[60px] bg-slate-800">
        <div className="w-full h-full flex items-center justify-between">
          <div className="flex justify-between items-center lg:gap-4 pl-2 lg:pl-4 xl:pl-8">

            <Link to="/" className="text-white flex justify-center items-center lg:w-40 xl:w-64">
              <img src={Connect_Plus_logo} alt="logo"  className="w-8 lg:w-10 bg-gray-200" />
              <h1 className="font-medium ml-1 lg:ml-2 text-xs lg:text-lg xl:text-xl 2xl:text-2xl lg:font-bold ">Connect Plus</h1>
            </Link>
            
            <div className="relative flex flex-row items-center overflow-hidden text-gray-400 px-2 ml-2 xl:ml-4">
              <i className="fa-solid fa-bars"></i>
              
              <div className="flex items-center ml-2 lg:ml-4 p-2 text-xs lg:text-sm xl:text-base 2xl:text-lg bg-slate-900">
                <i className="fa fa-search " aria-hidden="true"></i>
                <input type="search" name="search" id="searchProducts" 
                  className="mx-2 w-32 lg:w-48 xl:w-60 2xl:w-72 px-1 py-1 text-white outline-none bg-transparent"
                  placeholder="Search products" />
              </div>
            </div>

          </div>

              <ul className="h-full flex justify-end items-center text-sm lg:text-base xl:text-lg 2xl:text-xl text-gray-400 gap-2.5 lg:gap-5 xl:gap-6 px-2 md:px-3">
                <li className="cursor-default flex items-center gap-1 lg:gap-2">Reports <i className="fa fa-caret-down cursor-pointer" aria-hidden="true"></i></li>
                <li className="cursor-default flex items-center gap-1 lg:gap-2">Projects <i className="fa fa-caret-down cursor-pointer" aria-hidden="true"></i></li>
                <li className="flex justify-center items-center cursor-default gap-1 lg:gap-2">
                  <img src={England_Flag} alt="England Flag" width="16" /> English <i className="fa fa-caret-down cursor-pointer" aria-hidden="true"></i></li>
                <li className="flex justify-center items-center cursor-default gap-1 lg:gap-2">
                  <img src="https://source.unsplash.com/user/c_v_r" alt="user-img" className="rounded-full w-7 h-7"/> Henry Klein <i className="fa fa-caret-down cursor-pointer" aria-hidden="true"></i></li>
                <li className="cursor-default"><i className="fa-solid fa-message cursor-pointer"></i></li>
                <li className="cursor-default"><i className="fa fa-bell cursor-pointer" aria-hidden="true"></i></li>
              </ul>
          </div>
      
    </header>

    </>
  )
}

export default Header;
