import React, { useState } from 'react'
import Naruto from '../../components/category/products/Naruto'


export default function IpProduct() {

    const productList = [
        {id: 1, name: "NARUTO", description: "Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young, socially isolated ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village"},
        {id: 2, name: "LABUBU", description: "Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young, socially isolated ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village"},
        {id: 3, name: "SONIC", description: "Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young, socially isolated ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village"},
        {id: 4, name: "BATMAN", description: "Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young, socially isolated ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village"},
    ]

    const [activeProduct, setActiveProduct] = useState(1);

    const handleVisibleProduct = (id)=>{
        setActiveProduct(id);
    }

    const renderProduct=()=>{
        switch(activeProduct){
            case 1:
                return <Naruto/>
            case 2:
                return;
            case 3:
                return;
            case 4:
                return;
            default:
                return <Naruto/>
        }
    }

  return (
    <div className='pt-8 xl:pt-25 pb-10'>
        <div className='flex justify-center items-center'>
            <h1 className='text-2xl xl:text-4xl text-gray-950 font-semibold'> IP PRODUCT</h1>
        </div>
        <div className='flex flex-row w-full gap-5 items-center pl-10 pt-10 xl:pt-20 '>
            {productList.map((product)=>(
                <button
                onClick={()=>handleVisibleProduct(product.id)}
                className={` text-sm xl:text-xl font-semibold cursor-pointer ${activeProduct === product.id ? 'text-gray-900':'text-gray-500'}`}
                key={product.id}>
                    {product.name}
                </button>
            ))}
        </div>
        <div>
            {renderProduct()}
        </div>
    </div>
  )
}
