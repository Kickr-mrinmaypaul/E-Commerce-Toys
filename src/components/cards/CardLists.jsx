import React,{useRef} from 'react'
import Cards from './cards'
import { Link } from 'react-router-dom'
import cardBoxData from '../../data/cardBoxData.json'
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

export default function CardLists() {
    const scrollRef = useRef(null);

    const scroll = (direcation)=>{
        if(scrollRef.current){
            const {scrollLeft, clientWidth } = scrollRef.current;
            const scrollAmount = clientWidth  * 0.5;
            if(direcation === "left"){
                scrollRef.current.scrollTo({
                    left: scrollLeft - scrollAmount,
                    behavior: "smooth"
                })
            }else{
                scrollRef.current.scrollTo({
                    left: scrollLeft + scrollAmount,
                    behavior: "smooth"
                })
            }
        }
    }

  return (
    <div className='px-13 h-auto'>
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-4xl text-gray-950 font-semibold'>BLIND BOX</h1>
            <Link to="#" className='text-xl text-gray-950 font-semibold  border-b-2 border-b-gray-800 '>
                EXPLORE MORE
            </Link>
        </div>
        
        
        <div ref={scrollRef} className="flex px-2 mt-30 overflow-x-auto scroll-smooth scrollbar-hide">
            <button 
                className="absolute cursor-pointer left-2 -translate-y-1/2 bg-gray-200 p-2 rounded-full z-10 items-center mt-30"
                onClick={() => scroll("left")}>
                <FaAngleLeft className='text-white text-sm h-6 w-6'/>
            </button>
            {cardBoxData.map((card) => (
                <div key={card.id} className="flex-shrink-0 w-[25%] md:w-[35%] sm:w-[50%] xs:w-[75%] px-3">
                    <Cards
                        imageurl={card.img}
                        title={card.title}
                        amount={`₹${card.amount} / PICK`}
                        wishList={false}
                        linkurl={`/view-card-details/blindbox/${card.id}`}
                    />
                    <div className='flex w-full justify-center items-center mt-10'>
                        <button className=' text-xl font-semibold border-2 border-gray-950 px-3 py-1'>Pick Now</button>
                    </div>
                </div>
            ))}
                <button 
                    className="absolute cursor-pointer right-2 -translate-y-1/2 bg-gray-200 p-2 rounded-full z-10 mt-30"
                    onClick={()=> scroll("right")}>
                    <FaAngleRight className='text-white text-sm h-6 w-6'/>
                </button>
        </div>
        
    </div>
  )
}
