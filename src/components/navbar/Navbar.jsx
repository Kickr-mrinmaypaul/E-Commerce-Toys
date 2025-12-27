import React from 'react'
import { Link } from 'react-router-dom'
import { Headset, Search, UserRound, Heart, ShoppingCart } from 'lucide-react';
import { GoHeart } from "react-icons/go";
import Input from '../input/Input';
function Navbar() {

    const navLinks = [
        { id: 1, label: 'NEW & FEATURED', value:"", link: '/' },
        { id: 2, label: 'CATEGORIES', value:"", link: '/about' },
        { id: 3, label: 'CHARACTER', value:"", link: '/contact'},
        { id: 4, label: 'ACCESSORIES', value:"", link: '/contact'},
        { id: 5, label: 'MEGA', value:"", link: '/contact'},
        { id: 6, label: 'HOLIDAY TREACTS', value:"", link: '/contact'},
        { id: 7, label: 'STORE PICKUP', value:"", link: '/contact'},
    ];



    const logo ="https://cdn.vectorstock.com/i/1000v/15/18/kids-toys-logo-playful-design-vector-27051518.jpg";

  return (
    <nav className='flex flex-col bg-white w-full pt-4 top-0 fixed z-50'>

        <div className='flex w-full items-center justify-between px-1 xl:px-3'>
            <div className='flex bg-white xl:w-1/3 items-center justify-between py-1 px-1 xl:py-2.5 xl:px-2 text-black text-start border-2 border-gray-700 focus-within:ring-0.5 focus-within:ring-gray-900 rounded-full'>
                <input type="text" 
                    placeholder='Search Products...'
                    className='outline-none bg-transparent text-black pl-1 placeholder-gray-900 placeholder:font-semibold text-sm xl:text-lg font-semibold'
                />
                <Search className='w-4 h-4 xl:w-7 xl:h-7 text-gray-900 right-0'/>
            </div>
            <div className='flex w-1/3 flex-row gap-1 xl:gap-2 items-center '>
                
                  <img src={logo} alt="TOY MyST" className='flex h-12 xl:h-15 overflow-hidden border rounded-full'/>
                  <h2 className='text-gray-950 text-2xl xl:text-4xl'>𝐓𝐎𝐘 𝐌𝐲𝐒𝐓</h2>
               
            </div>
            <div className='flex items-center justify-between gap-2'>
                <Link to="#">
                    <Headset className='w-5 h-5 xl:w-7 xl:h-7 text-gray-900' />
                </Link>
                <Link to="#">
                    <UserRound className='w-5 h-5 xl:w-7 xl:h-7 text-gray-900'/>
                </Link>
                <Link to="#">
                    <Heart className='w-5 h-5 xl:w-7 xl:h-7 text-gray-900'/>
                </Link>
                <Link to="#">
                    <ShoppingCart className='w-5 h-5 xl:w-7 xl:h-7 text-gray-900'/>
                </Link>
            </div>
        </div>
        <div className="mt-2 mb-1 xl:mt-5 border-t-2 border-gray-300">
            <nav className="flex justify-center items-center">
              <ul className="flex gap-1 xl:gap-10 items-center text-xs xl:text-lg text-gray-950 font font-semibold">
                {navLinks.map((item) => (
                  <li key={item.id}>
                    <select
                      to={item.link}
                      className={({ isActive }) =>
                        `text-sm font-semibold ${
                          isActive ? "text-blue-600" : "text-gray-800 hover:text-blue-500"
                        }`
                      }
                    >
                      {/* {item.label} */}
                        <option value="">{item.label}</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                    </select>
                  </li>
                ))}
              </ul>
            </nav>
        </div>

    </nav>
  )
}

export default Navbar;