import React,{useContext, useRef} from 'react'
import CardContext from '../../context/cards/CardContext'
import Cards from '../../components/cards/cards';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function MeetYourFriends() {

    const {newCards, loading, error} = useContext(CardContext);
    const sliderRef = useRef();

    const settings = {
    dots: false,
    infinite: true,
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 5,
    speed: 500,
    focusOnSelect: true, 
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 5 } },
      { breakpoint: 768, settings: { slidesToShow: 4 } },
      { breakpoint: 480, settings: { slidesToShow: 3 } },
    ],
  };

  
    // const handleWheel = (e) => {
    // e.preventDefault();
    // if (e.deltaY < 0) {
    //   sliderRef.current.slickPrev();
    // } else {
    //   sliderRef.current.slickNext();
    // }
    // };
    // inside div onWheel={handleWheel}

    if(loading) return <p>Loading...</p>
    if(error) return <p>{error}</p>
  return (
    <div  className='flex flex-col w-full h-full'>
        <div className='flex justify-center items-center'>
            <h1 className='text-3xl text-gray-950 font-semibold '>“ ℋ𝒾 ℳℯℯ𝓉 𝒴ℴ𝓊𝓇 ℱ𝓇𝒾ℯ𝓃𝒹𝓈 “</h1>
        </div>
       <div className='h-auto mt-20 '>
         <Slider ref={sliderRef} {...settings} className='mt-10'>
            {newCards.map((card)=>(
                <div key={card.id} className="flex-shrink-0 w-[25%] md:w-[25%] sm:w-[50%] xs:w-[75%] px-3">
                    <Cards
                    imageurl={card.img}
                    title={card.title}
                    wishList={false}
                    />
                </div>
            ))}
        </Slider>
       </div>
    </div>
  )
}
