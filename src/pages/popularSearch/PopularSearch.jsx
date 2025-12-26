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
    <div className='bg-red-700 h-auto w-full pb-2'>
        <div className='flex items-center justify-center pt-8'>
            <h1 className='text-3xl text-stone-50 font-semibold'>POPULAR SEARCH</h1>
        </div>
        <div className='flex flex-row w-full gap-5 items-center pl-30 pt-20 mt-10'>
            {categoryList.map((category)=>(
                <button 
                onClick={()=> handleCategoryVisible(category.id)}
                className={`flex text-xl px-6 py-2.5 cursor-pointer font-bold rounded-full ${activateCategory === category.id ? 'bg-gray-950 text-white':'text-gray-950 bg-white'}`}
                key={category.id}>
                    {category.name}
                </button>
            ))}
        </div>
        <div>
            {renderCategory()}
        </div>
    </div>
  )
}
