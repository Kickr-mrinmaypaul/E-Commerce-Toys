import React, { useState } from 'react'
import MysteryBox from '../../components/category/MysteryBox'

export default function PopularSearch() {
    const categoryList = [
        {id: 1, name: "Mystery Box"},
        {id: 2, name: "Trendy Plushie"},
        {id: 3, name: "Characters"},
        {id: 4, name: "Holiday"},
        {id: 5, name: "Labubu"},
    ]

    const [activateCategory, setActivateCategory] = useState(1);

    const handleCategoryVisible =(id)=>{
        setActivateCategory(id);
    }

    const renderCategory = () =>{
            switch(activateCategory){
            case 1:
                return <MysteryBox/>
            case 2:
                return;
            case 3:
                return;
            case 4:
                return;
            case 5:
                return;
            default:
                return <MysteryBox/>
        }
    }
  return (
    <div className='relative bg-[#b91c1c] h-auto w-full pb-24'>
    
    {/* <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 690" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,700 L 0,262 C 105.73333333333329,207.73333333333335 211.46666666666658,153.46666666666667 400,175 C 588.5333333333334,196.53333333333333 859.8666666666666,293.8666666666667 1047,321 C 1234.1333333333334,348.1333333333333 1337.0666666666666,305.06666666666666 1440,262 L 1440,700 L 0,700 Z" stroke="none" stroke-width="0" fill="#b91c1c" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 350)"></path></svg> */}
  
        <div className='flex items-center justify-center pt-6 xl:pt-8'>
            <h1 className='text-2xl xl:text-3xl text-stone-50 font-semibold'>POPULAR SEARCH</h1>
        </div>
        <div className='flex flex-row w-full gap-3 xl:gap-5 items-center pl-20 xl:pl-30 pt-6 xl:pt-10'>
            {categoryList.map((category)=>(
                <button 
                onClick={()=> handleCategoryVisible(category.id)}
                className={`flex  text-sm xl:text-xl px-3 py-2  xl:px-6 xl:py-2.5 cursor-pointer font-bold rounded-full ${activateCategory === category.id ? 'bg-gray-950 text-white':'text-gray-950 bg-white'}`}
                key={category.id}>
                    {category.name}
                </button>
            ))}
        </div>
        <div>
            {renderCategory()}
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
            
        </div>
        {/* <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 690" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,700 L 0,262 C 105.73333333333329,207.73333333333335 211.46666666666658,153.46666666666667 400,175 C 588.5333333333334,196.53333333333333 859.8666666666666,293.8666666666667 1047,321 C 1234.1333333333334,348.1333333333333 1337.0666666666666,305.06666666666666 1440,262 L 1440,700 L 0,700 Z" stroke="none" stroke-width="0" fill="#b91c1c" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 350)"></path></svg> */}
    </div>
  )
}
