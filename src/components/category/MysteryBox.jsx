import React,{useContext, useRef} from 'react'
import { Link } from 'react-router-dom'
import CardContext from '../../context/cards/CardContext'
import Cards from '../cards/cards';
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

export default function MysteryBox() {

    const {blindBoxCards, loading, error} = useContext(CardContext);
    const scrollRef = useRef();

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
    <div className='flex flex-row w-full'>
        <div className='flex flex-col w-1/3'>
            <div>
                <span className='flex text-3xl text-white font-semibold'>Explore Every Popular Thing</span>
                <Link to="#">View more</Link>
            </div>
            <div className='mt-6 flex flex-row gap-2'>
                {/* left button and right rutton(< >) */}
                <button 
                    className=" cursor-pointer left-2 -translate-y-1/2 bg-gray-100 p-2 rounded-full z-10 items-center"
                    onClick={() => scroll("left")}>
                    <FaAngleLeft className='text-white text-sm h-6 w-6'/>
                </button>
                <button 
                    className="cursor-pointer right-2 -translate-y-1/2 bg-gray-200 p-2 rounded-full z-10"
                    onClick={()=> scroll("right")}>
                    <FaAngleRight className='text-white text-sm h-6 w-6'/>
                </button>
            </div>
        </div>
        <div ref={scrollRef} className='flex px-2 mt-30 overflow-x-auto scroll-smooth scrollbar-hide'>
            {blindBoxCards.map((card)=>(
                <div key={card.id} className='flex-shrink-0 w-[25%] md:w-[35%] sm:w-[50%] xs:w-[75%] h-[70%] px-3'>
                    <Cards
                    imageurl={card.img}
                    title={card.title}
                    amount={card.amoutnt}
                    wishList={false}
                    />
                    <div className='flex w-full justify-center items-center mt-10'>
                        <button className=' text-xl font-semibold border-2 border-gray-950 px-3 py-1'>Pick Now</button>
                    </div>
                </div>  
            ))}
        </div>
    </div>
  )
}
