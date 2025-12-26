import React,{useContext} from 'react'
import { useParams } from 'react-router-dom'
import CardContext from '../../context/cards/CardContext';

export default function ViewCardDetails() {
  const {id, type} = useParams();
  const {getCardByTypeAndId, addToCart, loading} = useContext(CardContext);

  const card = getCardByTypeAndId(type, id);

  if (loading) return <p>Loading...</p>;
  if (!card) return <p>Card not found</p>;

  return ( 
    <div className='flex flex-row w-full pt-40 min-h-screen gap-3'>
      <div className='flex flex-col w-1/2 px-2'>
        <div className='flex justify-center  h-full w-full '>
          {/* main card image */}
          <img
            className='h-full w-full object-cover rounded-4xl pb-5'
            src={card.img} />
        </div>
        <div className='flex flex-row gap-2 pb-3'>
          <div>
            <img 
            className='object-cover rounded-2xl'
            src={card.img}/>
          </div>
          <div>
            <img 
            className='object-cover rounded-2xl'
            src={card.img}/>
          </div>
          <div>
            <img 
            className='object-cover rounded-2xl'
            src={card.img}/>
          </div>
          <div>
            <img 
            className='object-cover rounded-2xl'
            src={card.img}/>
          </div>
        </div>
      </div>
      <div className='flex flex-col space-y-8 w-1/2'>
        <div>
          <h2 className='text-xl text-gray-950 font-semibold'>{card.detailedTitle}</h2>
        </div>
        <div>
          <p className='text-2xl text-gray-950 font-semibold'>₹{card.amount}</p>
        </div>
        <div>
          <button className='flex cursor-pointer px-3 py-1 bg-gray-100 text-sm text-gray-950 font-semibold border border-gray-100 gap-2 rounded-sm'>
            QUANTITY <span>1</span> <span className='text-amber-600 text-md'>+</span>
          </button>
        </div>
        <div>
          <button className='flex cursor-pointer px-2.5 py-1 bg-amber-600 border rounded-sm text-white text-sm'>Add to Cart</button>
        </div>
        <div className='flex flex-col'>
            <span className='text-2xl text-gray-950 font-semibold mb-3'>Product Description</span>
            {card.productDescription.split(".").map((line, index)=>(
              <p 
              className='text-md text-gray-800'
              key={index} >{line}</p>
            ))}
            
        </div>
      </div>
    </div>
  )
}
