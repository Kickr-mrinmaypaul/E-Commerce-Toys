import React,{useRef} from 'react'
import Cards from './cards'
import { Link } from 'react-router-dom'
import cardBoxData from '../../data/cardBoxData.json'
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import Button from '../button/Button';

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
    <div className='px-8 xl:px-13 h-auto pb-8 xl:pb-25'>
        <div className='flex flex-col justify-center items-center space-y-0'>
            <h1 className='text-2xl xl:text-4xl text-gray-950 font-semibold'>BLIND BOX</h1>
            <Link to="#" className='text-sm xl:text-xl text-gray-950 font-semibold  border-b-2 border-b-gray-800'>
                EXPLORE MORE
            </Link>
        </div>
        
        
        <div ref={scrollRef} className="flex px-2 mt-8 xl:mt-30 overflow-x-auto scroll-smooth scrollbar-hide">
            <button 
                className="absolute cursor-pointer left-1 xl:left-2 -translate-y-1/2 bg-gray-200 p-1 xl:p-2 rounded-full z-10 items-center mt-30"
                onClick={() => scroll("left")}>
                <FaAngleLeft className='text-white text-sm h-5 w-5 xl:h-6 xl:w-6'/>
            </button>
            {cardBoxData.map((card) => (
                <div key={card.id} className="flex-shrink-0 w-[30%] xl:w-[35%] 2xl:w-[22%] px-3">
                    <Cards
                        imageurl={card.img}
                        title={card.title}
                        amount={`₹${card.amount} / PICK`}
                        wishList={false}
                        linkurl={`/view-card-details/blindbox/${card.id}`}
                    />
                    <div className='flex w-full justify-center items-center mt-5 xl:mt-10'>
                        {/* <button className='text-sm xl:text-xl font-semibold border-2 border-gray-950 px-2 py-0.5 xl:px-3 xl:py-1'>Pick Now</button> */}
                        <Button
                            name="Pick Now"
                        />
                    </div>
                </div>
            ))}
                <button 
                    className="absolute cursor-pointer right-1 xl:right-2 -translate-y-1/2 bg-gray-200 p-1 xl:p-2 rounded-full z-10 mt-30"
                    onClick={()=> scroll("right")}>
                    <FaAngleRight className='text-white text-sm h-5 w-5 xl:h-6 xl:w-6'/>
                </button>
        </div>
        
    </div>
  )
}
