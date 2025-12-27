import React,{useContext, useRef} from 'react'
import { Link } from 'react-router-dom'
import CardContext from '../../context/cards/CardContext'
import Cards from '../cards/cards';
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import Button from '../button/Button';

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
        <div className='flex flex-col flex-shrink-0 w-1/3 justify-center items-center'>
            <div className='justify-center items-center'>
                <span className='flex text-2xl xl:text-4xl text-white justify-center items-center font-bold'>Explore Every <br/>Popular Thing</span>
                <Link 
                to="#" 
                className='flex justify-center items-center text-gray-50 pt-3 pb-4'
                >
                    View more
                </Link>
            </div>
            <div className='mt-6 flex flex-row gap-2'>
                {/* left button and right rutton(< >) */}
                <button 
                    className=" cursor-pointer left-1 xl:left-2 -translate-y-1/2 bg-gray-100 p-1 xl:p-2 rounded-full z-10 opacity-60 items-center"
                    onClick={() => scroll("left")}>
                    <FaAngleLeft className='text-white text-sm h-5 w-5 xl:h-6 xl:w-6'/>
                </button>
                <button 
                    className="cursor-pointer right-1 xl:right-2 -translate-y-1/2 bg-gray-200 p-1 xl:p-2 rounded-full z-10 opacity-60"
                    onClick={()=> scroll("right")}>
                    <FaAngleRight className='text-white text-sm h-5 w-5 xl:h-6 xl:w-6'/>
                </button>
            </div>
        </div>
        <div ref={scrollRef} className='flex flex-1 px-2 mt-4 overflow-x-auto scroll-smooth scrollbar-hide'>
            {blindBoxCards.map((card)=>(
                <div key={card.id} className='flex-shrink-0 w-[70%] sm:w-[50%] xl:w-[33%] 2xl:w-[22%] px-6'>
                    <div className='bg-white gap-3 px-2 py-3 rounded-2xl'>
                        <Cards
                        imageurl={card.img}
                        title={card.title}
                        amount={`₹${card.amount} / PICK`}
                        wishList={false}
                        />
                    <div className='flex w-full justify-center items-center mt-6 xl:mt-10'>
                        <Button
                        name="Pick Now"
                        />
                    </div>
                    </div>
                </div>  
            ))}
        </div>
    </div>
  )
}
