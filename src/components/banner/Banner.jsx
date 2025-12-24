import React, { useState, useEffect } from 'react'

function Banner() {
    const bannerImg =[
        "https://www.shutterstock.com/image-photo/educational-kids-toys-collection-teddy-260nw-2349863607.jpg",
        "https://as1.ftcdn.net/jpg/04/76/79/70/1000_F_476797090_GD9J6JoeR956o2yXxMBEqQEw0xnlgAx5.jpg",
        "https://i.pinimg.com/736x/0c/e2/7a/0ce27aaca629ac2ca2defeba51efe8e2.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxpIzyffQbTB8Z9pUaJwMVyRSk2jgf5uhNwQ&s"
    ];

    const slides = [...bannerImg, bannerImg[0]];
    const [index, setIndex] = useState(0);
    const [transition, setTransition] = useState(true);

    useEffect(()=>{
        const interval = setInterval(()=>{
            setIndex((prev)=> prev+1)
        },2000)
        return ()=> clearInterval(interval);
    })

    useEffect(()=>{
        if(index === bannerImg.length){
            setTimeout(() => {
                setTransition(false);
                setIndex(0);
            },2500);
        }else{
            setTransition(true);
        }
    },[index, bannerImg.length]);


//   return (
//     <div className='w-full h-screen overflow-x-scroll flex snap-x snap-mandatory scroll-smooth'>
//         {bannerImg.map((banner, index)=>(
//             <div key={index} className="w-full h-screen flex-shrink-0 snap-center">
//                 <img src={banner} alt='banner' className='h-full w-full object-cover'/>
//             </div>
//         ))}   
//     </div>
//   )

  return (
    <div className="w-full h-screen overflow-hidden">
      <div
        className={`flex h-full ${
          transition ? "transition-transform duration-500 ease-in-out" : ""
        }`}
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((img, i) => (
          <div key={i} className="min-w-full h-screen">
            <img
              src={img}
              alt="banner"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );

}

export default Banner;