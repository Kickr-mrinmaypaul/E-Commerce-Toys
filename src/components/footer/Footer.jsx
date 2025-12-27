import React from 'react'
import { Link } from 'react-router-dom'
import { RiSendPlaneFill } from "react-icons/ri";

function Footer() {
  return (
    <footer className='bg-black w-full mt-auto bottom-0 pb-10 xl:pb-20'>
        <div className='pt-8 mx-3 xl:mx-17 flex flex-row justify-between'>
            <div className='flex flex-col'>
                <span className='text-lg xl:text-2xl text-white font-bold'>Support</span>
                <div className='flex flex-col text-sm xl:text-xl text-gray-400 mt-10 xl:mt-18 space-y-3 lg:space-y-5'>
                    <Link to="#">FAQ</Link>
                    <Link to="#">SHIPPING INFO </Link>
                    <Link to="#">PRIVACY POLICY</Link>
                    <Link to="#">TERMS & CONDITIONS</Link>
                    <Link to="#">REFUND POLICY</Link>
                </div>
            </div>
            <div className='flex flex-col'>
                <span className='text-lg xl:text-2xl text-white font-bold'>Company</span>
                <div className='flex flex-col text-sm xl:text-xl text-gray-400 mt-10 xl:mt-18 space-y-3 lg:space-y-5'>
                    <Link to="#">ABOUT US</Link>
                    <Link to="#">BLOG</Link>
                </div>
            </div>
            <div className='flex flex-col'>
                <span className='text-lg xl:text-2xl text-white font-bold'>Shop</span>
                <div className='flex flex-col text-sm xl:text-xl text-gray-400 mt-10 xl:mt-18 space-y-3 lg:space-y-5'>
                    <Link to="#">TRENDING</Link>
                    <Link to="#">MYSTERY BOXS</Link>
                    <Link to="#">MEGA COLLECTIONS</Link>
                    <Link to="#">ACCESSORIES</Link>
                </div>
            </div>
            <div>
                <span className='text-lg xl:text-2xl text-white font-bold '>Contact Us</span>
                <div className='flex flex-row bg-white mt-10 xl:mt-18 px-1.5 py-1 xl:px-2  xl:py-2.5 space-x-8 xl:space-x-15 justify-between items-center border rounded-2xl'>
                    <input 
                    className='outline-none bg-transparent placeholder:text-gray-400 placeholder:font-semibold'
                    type="email" 
                    placeholder='Your Email Address'
                    />
                    <button className='cursor-pointer'>
                        <RiSendPlaneFill className='h-5 w-5 xl:h-7 xl:w-7 text-gray-400'/>
                    </button>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer