import React from 'react';
import Connect_Plus_logo from '../assets/icons/Connect_Plus_logo.png';
import England_Flag from '../assets/icons/englandFlag.jpg';
// import User_Img from '../assets/icons/unnamed.jpg';


export default function Header() {
  return (
    <header className="container-fluid w-full h-[10%] bg-slate-800 flex">
      <div className="w-1/5 h-full text-white flex justify-center items-center  ">
        <img src={Connect_Plus_logo} alt="logo" width="32" className="bg-gray-200" />
        <h1 className="font-bold ml-2 ">Connect Plus</h1>
      </div>

      <div className="h-full w-4/5 flex justify-between items-center">
          
          <div className="h-full flex justify-start items-center text-gray-400 px-4">
            <i className="fa-solid fa-bars"></i>
            
            <div className="ml-6 px-4 py-2 text-xs bg-slate-900">
              <i className="fa fa-search " aria-hidden="true"></i>
              <input type="search" name="search" id="searchProducts" 
                className="mx-2 w-48 px-1 py-1 text-white outline-none bg-transparent"
                placeholder="Search products" />
            </div>

          </div>
          <ul className="h-full flex justify-end items-center text-sm text-gray-400 px-8 gap-8">
            <li className="cursor-default">Reports <i className="fa fa-caret-down ml-2 cursor-pointer" aria-hidden="true"></i></li>
            <li className="cursor-default">Projects <i className="fa fa-caret-down ml-2 cursor-pointer" aria-hidden="true"></i></li>
            <li className="flex justify-center items-center cursor-default">
              <img src={England_Flag} alt="England Flag" width="16" className="mr-2.5" /> English <i className="fa fa-caret-down ml-2 cursor-pointer" aria-hidden="true"></i></li>
            <li className="flex justify-center items-center cursor-default">
              <img src="https://source.unsplash.com/user/c_v_r" alt="user-img" className="rounded-full w-7 h-7 mr-2.5"/> Henry Klein <i className="fa fa-caret-down ml-2 cursor-pointer" aria-hidden="true"></i></li>
            <li className="cursor-default"><i className="fa-solid fa-message cursor-pointer "></i></li>
            <li className="cursor-default"><i className="fa fa-bell cursor-pointer" aria-hidden="true"></i></li>
          </ul>
      </div>
      
    </header>
  )
}
