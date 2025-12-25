// import React from 'react'
// import { Link } from 'react-router-dom'

// const Cards = React.forwardRef(function cards({
//     title,
//     content,
//     imageurl,
//     linkurl,
//     className="",
//     ...props
// }) {
//   return (
//     <div className='card'>
//         {imageurl && <img src={imageurl} alt={title} className={`p-2 h-40 mb-2 ${className}`} {...props}/>}
//         <div className='card-body'>
//             <h3>{title}</h3>
//             <p>{content}</p>
//         </div>
//         <Link to={linkurl} >
            
//         </Link>
//     </div>
//   )
// })

// export default Cards;


// import React from 'react'
// import { Link } from 'react-router-dom'
// import { GoHeart } from "react-icons/go";

// const Cards = React.forwardRef(function cards({
//     title,
//     amount,
//     imageurl,
//     linkurl,
//     className="",
//     ...props
// },ref) {
//   return (
//     <div ref={ref} className='w-full max-w-xs mx-auto'>
//       <Link to={linkurl}>
//         <div className='card bg-gray-100'>
//            {imageurl && <img src={imageurl} alt={title} className={`flex p-2 h-80 w-full object-cover rounded-4xl ${className}`} {...props}/>}
//           <div className='card-body flex flex-col  px-5'>
//               <h3 className='text-xl font-semibold text-gray-950'>{title}</h3>
//               <div className='flex flex-row items-center justify-between'>
//                 <p className='text-xl font-semibold text-gray-950 mt-2'>{amount}</p>
//                 <button className='cursor-pointer text-gray-800 font-bold'>
//                   <GoHeart className='h-7 w-7 '/>
//                 </button>
//               </div>
//           </div>
//         </div>
//       </Link>
//     </div>
//   )
// })

// export default Cards;


import React from 'react'
import { Link } from 'react-router-dom'
import { GoHeart } from "react-icons/go";


function Cards({
    title,
    amount,
    imageurl,
    linkurl,
    className="",
    ...props
}){
  return (
    <div className='w-full max-w-xs mx-auto'>
      <Link to={linkurl}>
        <div className='card bg-transparent'>
           {imageurl && <img src={imageurl} alt={title} className={`flex p-2 h-80 w-full object-cover rounded-4xl ${className}`} {...props}/>}
          <div className='card-body flex flex-col  px-5'>
              <h3 className='text-xl font-semibold text-gray-950'>{title}</h3>
              <div className='flex flex-row items-center justify-between'>
                <p className='text-xl font-semibold text-gray-950 mt-2'>{amount}</p>
                <button className='cursor-pointer text-gray-800 font-bold'>
                  <GoHeart className='h-7 w-7 '/>
                </button>
              </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Cards;


