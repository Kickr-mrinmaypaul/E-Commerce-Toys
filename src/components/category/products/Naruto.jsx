import React,{useContext, useState} from 'react'
import CardContext from '../../../context/cards/CardContext'
import Cards from '../../cards/cards';

export default function Naruto() {

    const productName = {id: 1, name: "NARUTO", description: "Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young, socially isolated ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village", image:"https://www.kindpng.com/picc/m/342-3427562_hinh-anh-naruto-chibi-png-download-anime-drawings.png"};
        
    const {newCards, loading, error} = useContext(CardContext);

    const initialCount = 4;

    const[visibleCount, setVisibleCount] = useState(initialCount);

    const loadMore =()=>{
        setVisibleCount((prev)=> (Math.min(prev+12, newCards.length)));
    }

    if(loading) return<p>Loading..</p>
    if(error) return<p>{error}</p>

  return (
    <div className='px-8'>
        <div className='w-full flex flex-row pb-10'>
            <div className='w-1/2'>
                <div className='text-9xl text-gray-950 font-bold'>
                    {productName.name}
                </div>
                <span className='flex flex-row text-wrap text-xl font-semibold text-gray-500 mt-5'>
                {productName.description}
                </span>
            </div>

            <div className='flex w-1/2 items-center justify-center '>
                <img 
                className='absolute h-110 w-100 object-cover bg-transparent justify-center top-800'
                src={productName.image} alt='NARUTO'/>
            </div>
        </div>
        
        <div className='grid grid-cols-4 space-y-8 mt-10'>
            {newCards.slice(0, visibleCount).map((card)=>(
                <div key={card.id}>
                    <Cards
                        imageurl={card.img}
                        title={card.title}
                        amount={card.amount}
                    />
                </div>
            ))}
        </div>
        <div>
             {visibleCount < newCards.length && (
            <div className='flex justify-center items-center mt-6'>
                <button 
                className='px-4 py-2 mb-20 cursor-pointer text-gray-950 border-2 border-gray-950 text-xl font-medium'
                onClick={loadMore}>
                    VIEW MORE
                </button>
            </div>
        )}
        </div>
    </div>
  )
}
