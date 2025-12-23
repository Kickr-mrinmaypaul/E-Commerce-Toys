import React from 'react'
import { Link } from 'react-router-dom'

const Cards = React.forwardRef(function cards({
    title,
    content,
    imageurl,
    linkurl,
    className="",
    ...props
}) {
  return (
    <div className='card'>
        {imageurl && <img src={imageurl} alt={title} className={`p-2 h-40 mb-2 ${className}`} {...props}/>}
        <div className='card-body'>
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
        <Link to={linkurl} >
            view Details
        </Link>
    </div>
  )
})

export default Cards;