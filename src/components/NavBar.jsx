import React, { useState } from 'react'
import { logo } from '../assets'
import "./NavBar.css"


const NavBar = () => {

    const [toggle,setToggle]=useState(0)
  return (
    <div className="w-full p-[10px] flex justify-between items-center fixed bg-slate-400">
      <img src={logo} className=" h-[45px] md:h-[50px] cursor-pointer hover:scale-110 ml-4" />

      <div>
        <ul className="hidden md:flex text-[20px] ">
          <li className="menuItem hover:scale-110 hover:z-50 transition-all duration-300 ease-in-out">
            <a href="/#home">Home</a>
          </li>
          <li className="menuItem hover:scale-110">
            <a href="/#aboutme">About</a>
          </li>
          <li className="menuItem hover:scale-110">
            <a href="/#skills">Skills</a>
          </li>
          <li className="menuItem hover:scale-110">
            <a href="/#Projects">Project</a>
          </li>
          <li className="menuItem hover:scale-110">
            <a href="/#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-end md:hidden">
        {!toggle ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 cursor-pointer md:hidden"
            onClick={()=>setToggle(
              !toggle
            )}
          >
            <path
              fillRule="evenodd"
              d="M3 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 5.25Zm0 4.5A.75.75 0 0 1 3.75 9h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
              className="w-6 h-6 cursor-pointer md:hidden"
              onClick={()=>setToggle(!toggle)}
          >
            <path
              fillRule="evenodd"
              d="M3 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 5.25Zm0 4.5A.75.75 0 0 1 3.75 9h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        )
        }
       
        {toggle?<ul className=" md:hidden absolute flex mt-8 flex-col bg-gray-200 p-2 rounded-sm text-[20px] ">
          <li className="menuItem hover:scale-110 p-3 hover:z-50 transition-all duration-300 ease-in-out">
            <a href="/#home">Home</a>
          </li>
          <li className="menuItem p-3 hover:scale-110">
            <a href="/#aboutme">About</a>
          </li>
          <li className="menuItem p-3 hover:scale-110">
            <a href="/#skills">Skills</a>
          </li>
          <li className="menuItem p-3 hover:scale-110">
            <a href="/#Projects">Project</a>
          </li>
          <li className="menuItem p-3 hover:scale-110">
            <a href="/#contact">Contact</a>
          </li>
        </ul>:null

        }
      </div>
    </div>
  );
}

export default NavBar
