import React,{useContext} from 'react'
import Cards from './cards'
import { Link } from 'react-router-dom'
// import cardsData from '../../data/cardsData.json'
import CardContext from '../../context/cards/CardContext';

function NewCardItemList() {

    // const img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmQZnMbwljnz6uU10m_vWspIo5rEfQKlwujw&s"
    // const amount = "14,000";
    // const title ="DINO-LABUBU";
    const {newCards, loading, error} = useContext(CardContext);

    if(loading)  return <p>Loading...</p>;
    if(error) return <p>{error}</p>;

  return (
    <div className='pt-3 xl:pt-10'>
        <div className='flex flex-col space-y-0 justify-center items-center'>
            <h1 className='text-2xl xl:text-4xl text-gray-950 font-semibold'>NEW ARRIVALS</h1>
            <Link to="#" className='text-sm xl:text-xl text-gray-950 font-semibold '>
                Realese Calender
            </Link>
        </div>
        
        <div className="flex px-2 mt-8 pb-8  xl:px-6 xl:mt-10 xl:pb-10 overflow-x-auto scroll-smooth scrollbar-hide">
            {newCards.map((card) => (
                <div key={card.id} className="flex-shrink-0 w-[30%] xl:w-[25%] 2xl:w-[20%] px-3">
                <Cards
                    imageurl={card.img}
                    title={card.title}
                    amount={`₹${card.amount}`}
                    linkurl={`/view-card-details/new/${card.id}`}
                />
                </div>
            ))}
        </div>
    </div>
  )
}

export default NewCardItemList;