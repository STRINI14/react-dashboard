import React from 'react'
import logo from "../assets/logo.svg";
import { navLists } from '../constants';
import { CiSearch, CiSettings, CiUser } from 'react-icons/ci';

const Navbar = () => {
  return (
  <header className='flex items-center justify-between rounded-xl bg-gray-300 px-5 py-3'>
        <div>
            <img src={logo} alt="logo" className='w-8 cursor-pointer' />
        </div>

        <nav className='hidden items-center gap-8 rounded-full bg-slate-100 md:flex'>
            {navLists.map((nav)=> (
                <a href="#" key={nav} className='translate-all items-center rounded-full px-5 py-3 text-md font-semibold text-slate-700 duration-700 ease-in-out hover:bg-cyan-700 hover:text-white '>
                    {nav}
                </a>
            ))}
        </nav>

        <div className="flex items-center gap-4">
            <CiSearch className='translate-all cursor-pointer text-2xl duration-700 ease-in-out hover:bg-slate-700 hover:text-white rounded-full p-1'/>
            <CiSettings className='translate-all cursor-pointer text-2xl duration-700 ease-in-out hover:bg-slate-700 hover:text-white rounded-full p-1'/>
            <CiUser className='translate-all cursor-pointer text-2xl duration-700 ease-in-out hover:bg-slate-700 hover:text-white rounded-full p-1'/>
        </div>
  </header>
  )
}

export default Navbar
