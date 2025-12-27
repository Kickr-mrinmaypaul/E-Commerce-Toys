import React, { useState } from 'react'
import Cards from '../../components/cards/cards'
import cardsData from '../../data/cardsData.json'
import Button from '../../components/button/Button';

export default function RecommendedCards() {

    const initialCount = 12;

    const [visibleCount , setVisibleCount] = useState(initialCount);

    const loadMore = ()=>{
        setVisibleCount((prev)=> Math.min(prev+12, cardsData.length));
    }
  return (
    <div className='flex flex-col pb-10 xl:pb-15'>
        <div className='flex justify-center items-center mt-18'>
            <h1 className=' text-2xl xl:text-4xl text-gray-950 font-semibold'>RECOMMENDED FOR YOU</h1>
        </div>
        <div className='grid grid-cols-4 2xl:grid-cols-5 space-y-8 mt-10'>
            {cardsData.slice(0, visibleCount).map((card)=>(
                <div key={card.id} >
                    <Cards
                        imageurl={card.img}
                        title={card.title}
                        amount={`₹${card.amount}`}
                    />
                </div>
            ))}
        </div>
        
        {visibleCount < cardsData.length && (
            <div className='flex justify-center items-center mt-2 xl:mt-6'>
                {/* <button 
                className='px-4 py-2 mb-20 cursor-pointer text-gray-950 border-2 border-gray-950 text-xl font-medium'
                onClick={loadMore}>
                    VIEW MORE
                </button> */}
                <Button
                onClick={loadMore}
                name="VIEW MORE"
                />
            </div>
        )}
        
    </div>
  )
}
