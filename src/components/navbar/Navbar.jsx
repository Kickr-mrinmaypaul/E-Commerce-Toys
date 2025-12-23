import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

    const navLinks = [
        { id: 1, label: 'Home', link: '/' },
        { id: 2, label: 'About', link: '/about' },
        { id: 3, label: 'Contact', link: '/contact'},
    ];

    const logo ="";

  return (
    <nav className='nav-link flex  flex-row justify-between items-center bg-[#D5559F]'>
        <div className='flex h-45 justify-center items-center'>
            <img src="logo" alt="logo" />
        </div>
        <div >
            <ul className='flex justify-between gap-3 text-lg'> 
                {navLinks.map((item)=>(
                    <li key={item.id} className='text-black text-sm'>
                        <Link 
                        to={item.link}
                        // className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
        <div>
            <div>
                {/* search */}
            </div>
            <div>
                {/* profile  */}
            </div>
            <div>
                {/* add to card */}
            </div>
        </div>
    </nav>
  )
}

export default Navbar;