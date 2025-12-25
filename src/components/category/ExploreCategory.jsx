import React from 'react'

export default function ExploreCategory() {
    const categoryList = [
        {id: 1, name: "Mystry Box"},
        {id: 2, name: "Trendy Plushie"},
        {id: 3, name: "Characters"},
        {id: 4, name: "Holiday"},
        {id: 5, name: "Labubu"},
    ]

  return (
    <div className='bg-red-700 h-auto w-full pb-2'>
        <div className='flex items-center justify-center pt-8'>
            <h1 className='text-3xl text-stone-50 font-semibold'>POPULAR SEARCH</h1>
        </div>
        <div className='flex flex-row w-full gap-5 items-center pl-20 mt-10'>
            {categoryList.map((category)=>(
                <button 
                className='flex text-xl px-6 py-2.5 cursor-pointer bg-white text-black font-bold rounded-full'
                key={category.id}>
                    {category.name}
                </button>
            ))}
        </div>
    </div>
  )
}
