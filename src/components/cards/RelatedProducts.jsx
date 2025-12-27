import React,{useContext, useState} from 'react'
import CardContext from '../../context/cards/CardContext'
import Cards from './cards';

export default function RelatedProducts() {
    const {newCards, loading, error} = useContext(CardContext);

        const initialCount = 4;
    
        const [visibleCount , setVisibleCount] = useState(initialCount);
    
        const seeMore = ()=>{
            
        }

    if(loading) return <p>Loading...</p>
    if(error) return <p>{error}</p>

  return (
    <div className='mt-10 mb-6'>
        <div className='flex justify-between items-center px-6 pb-4'>
            <h1 className='text-2xl text-gray-900 font-semibold'>Related Products</h1>
            <span className='text text-lg text-gray-500 cursor-pointer font-semibold'>
                see more
            </span>
        </div>
        <div className='flex flex-row '>
            {newCards.slice(0, visibleCount).map((card)=>(
                <div key={card.id} className='flex-shrink-0 w-[25%] xl:w-[25%] 2xl:w-[20%] px-3'>
                    <Cards
                    imageurl={card.img}
                    title={card.title}
                    amount={card.amount}
                    />
                </div>
            ))}
        </div>
    </div>
  )
}
