import React from 'react'
import Cards from './cards'
import { Link } from 'react-router-dom'
import cardsData from '../../data/cardsData.json'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NewCardItemList() {

    // const img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmQZnMbwljnz6uU10m_vWspIo5rEfQKlwujw&s"
    // const amount = "14,000";
    // const title ="DINO-LABUBU";

  return (
    <div className='pt-10'>
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-4xl text-gray-950 font-semibold'>NEW ARRIVALS</h1>
            <Link to="#" className='text-xl text-gray-950 font-semibold '>
                Realese Calender
            </Link>
        </div>
        
        <div className="flex px-6 mt-10 overflow-x-auto scroll-smooth scrollbar-hide">
            {cardsData.map((card) => (
                <div key={card.id} className="flex-shrink-0 w-[25%] md:w-[25%] sm:w-[50%] xs:w-[75%] px-3">
                <Cards
                    imageurl={card.img}
                    title={card.title}
                    amount={`₹${card.amount}`}
                    linkurl={`/view-card-details/${card.id}`}
                />
                </div>
            ))}
        </div>
    </div>
  )
}

export default NewCardItemList;