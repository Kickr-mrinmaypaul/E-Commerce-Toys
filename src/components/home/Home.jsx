// // import React from 'react'
// // import { Element } from "react-scroll";
// // import Banner from '../banner/Banner'
// // import NewCardItemList from '../cards/NewCardItemList'

// // export default function Home() {
// //   return (
// //     <div>
// //         <Element name="Banner" className='h-screen min-h-screen'><Banner/></Element>
// //         <Element name="NewCardItemList" className="h-screen min-h-screen"><NewCardItemList/></Element>
// //     </div>
// //   )
// // }

// import React, { useState } from 'react'
// import Cards from '../../components/cards/cards'
// import cardsData from '../../data/cardsData.json'

// export default function RecommendedCards() {
//   const initialCount = 10; // number of cards to show initially
//   const [visibleCount, setVisibleCount] = useState(initialCount);

//   const loadMore = () => {
//     setVisibleCount((prev) => Math.min(prev + 10, cardsData.length));
//   }

//   return (
//     <div className='flex flex-col'>
//       <div className='flex justify-center items-center mt-18'>
//         <h1 className='text-4xl text-gray-950 font-semibold'>RECOMMENDED FOR YOU</h1>
//       </div>

//       <div className='grid grid-cols-4 gap-6 mt-10'>
//         {cardsData.slice(0, visibleCount).map((card) => (
//           <div key={card.id}>
//             <Cards
//               imageurl={card.img}
//               title={card.title}
//               amount={`₹${card.amount}`}
//             />
//           </div>
//         ))}
//       </div>

//       {visibleCount < cardsData.length && (
//         <div className='flex justify-center mt-6'>
//           <button
//             onClick={loadMore}
//             className='px-6 py-2 border border-gray-950 text-gray-950 font-semibold rounded hover:bg-gray-100 transition'
//           >
//             View More
//           </button>
//         </div>
//       )}
//     </div>
//   )
// }
