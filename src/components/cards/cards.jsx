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


import React from 'react'
import { Link } from 'react-router-dom'

const Cards = React.forwardRef(function cards({
    title,
    amount,
    imageurl,
    linkurl,
    className="",
    ...props
},ref) {
  return (
    <div ref={ref}>
      <Link to={linkurl}>
        <div className='card bg-gray-100'>
           {imageurl && <img src={imageurl} alt={title} className={`flex p-2 h-80 bordr  object-cover rounded-4xl ${className}`} {...props}/>}
          <div className='card-body'>
              <h3>{title}</h3>
              <p>{amount}</p>
          </div>
        </div>
      </Link>
    </div>
  )
})

export default Cards;


