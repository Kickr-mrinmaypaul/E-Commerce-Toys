import React,{useContext, useState} from 'react'
import CardContext from '../../../context/cards/CardContext'
import Cards from '../../cards/cards';
import Button from '../../button/Button';

export default function Naruto() {

    const productName = {id: 1, name: "NARUTO", description: "Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young, socially isolated ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village", image:"https://i.pinimg.com/1200x/9d/f3/75/9df3754e760d5341ac1b6707b9fb9ec4.jpg"};
        
    const {newCards, loading, error} = useContext(CardContext);

    const initialCount = 4;

    const[visibleCount, setVisibleCount] = useState(initialCount);

    const loadMore =()=>{
        setVisibleCount((prev)=> (Math.min(prev+12, newCards.length)));
    }

    if(loading) return<p>Loading..</p>
    if(error) return<p>{error}</p>

  return (
    <div className='px-8 bg-gray-50 pb-10'>
        <div className='w-full flex flex-row pb-10'>
            <div className='w-1/2'>
                <div className='text-7xl xl:text-9xl text-gray-950 font-bold'>
                    {productName.name}
                </div>
                <span className='flex flex-row text-wrap text-sm xl:text-xl font-semibold text-gray-500 mt-2 xl:mt-5'>
                {productName.description}
                </span>
            </div>

            <div className='flex w-1/2 items-center justify-center '>
                <img 
                className='absolute h-80 w-50 xl:h-110 xl:w-100 object-cover bg-transparent top-670 '
                src={productName.image} alt='NARUTO'/>
            </div>
        </div>
        
        <div className='grid grid-cols-4 2xl:grid-cols-5 space-y-8 mt-10'>
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
    </div>
  )
}
