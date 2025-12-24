import React from 'react'
import Cards from './cards'
import { Link } from 'react-router-dom'

function NewCardItemList() {

    const img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmQZnMbwljnz6uU10m_vWspIo5rEfQKlwujw&s"
    const amount = 14000;
  return (
    <div className='pt-2'>
        <div className='flex flex-col justify-center items-center mb-2'>
            <h1 className='text-4xl text-gray-950 font-semibold'>NEW ARRIVALS</h1>
            <Link to="#" className='text-xl text-gray-950 font-semibold '>
                Realese Calender
            </Link>
        </div>
        <div className='px-10'>
            <Cards
                imageurl={img}
                title="DINO-LABUB"
                amount={`₹${amount}`}
            />
        </div>
    </div>
  )
}

export default NewCardItemList;