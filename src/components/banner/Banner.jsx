import React, { useState, useEffect } from 'react'

function Banner() {
    const bannerImg =[
        "https://www.shutterstock.com/image-photo/educational-kids-toys-collection-teddy-260nw-2349863607.jpg",
        "https://as1.ftcdn.net/jpg/04/76/79/70/1000_F_476797090_GD9J6JoeR956o2yXxMBEqQEw0xnlgAx5.jpg",
        "https://i.pinimg.com/736x/0c/e2/7a/0ce27aaca629ac2ca2defeba51efe8e2.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxpIzyffQbTB8Z9pUaJwMVyRSk2jgf5uhNwQ&s"
    ];

   // const slides = [...bannerImg, bannerImg[0]];
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

  return (
    <div className="w-full overflow-hidden mt-20 xl:mt-30 pb-2 relative">
      <div
        className={`flex h-full ${
          transition ? "transition-transform duration-500 ease-in-out" : ""
        }`}
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        { bannerImg.map((img, i) => (
          <div key={i} className="min-w-full h-[380px] lg:h-[450px] xl:h-[520px] 2xl:h-[600px]">
            <img
              src={img}
              alt="banner"
              className="w-full h-full  object-cover"
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {bannerImg.map((_, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full transition-colors duration-300 cursor-pointer
              ${i === index % bannerImg.length ? 'bg-white' : 'bg-gray-200'}
            `}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>
    </div>
  );

}

export default Banner;